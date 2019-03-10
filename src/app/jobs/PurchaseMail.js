const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, content, user } = job.data

    await Mail.sendMail({
      from: '"Jony Hayama" <contato@jony.co>',
      to: ad.author.email,
      subject: `Solicitação de Compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    done()
  }
}

module.exports = new PurchaseMail()
