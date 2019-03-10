const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    if (purchaseAd.purchasedBy) {
      return res
        .status(400)
        .json({ error: 'This Ad has already been purchased' })
    }
    const user = await User.findById(req.userId)

    const purchase = await Purchase.create({ ...req.body, user: req.userId })

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.json(purchase)
  }

  async show (req, res) {
    const purchase = await Purchase.findById(req.params.id)

    return res.json(purchase)
  }

  async accept (req, res) {
    const purchase = await Purchase.findById(req.params.id)

    const purchaseAd = await Ad.findById(purchase.ad)
    if (req.userId !== purchaseAd.author) {
      return res
        .status(401)
        .json({ error: 'You must be the Ad author in order to accept it' })
    }

    if (purchaseAd.purchasedBy) {
      return res
        .status(400)
        .json({ error: 'This Ad has already been purchased' })
    }

    await Ad.findByIdAndUpdate(purchase.ad, {
      ...purchase.ad,
      purchasedBy: req.params.id
    })

    return res.json(true)
  }
}

module.exports = new PurchaseController()
