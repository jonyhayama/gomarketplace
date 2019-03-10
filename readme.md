# Go Market Place

- This is a simple project designed to learn [NodeJS](https://nodejs.org).
- It's also a challenge proposed by [Rocketseat](https://rocketseat.com.br) on their [Bootcamp](https://rocketseat.com.br/bootcamp).
- Use this project for **studying only** as it is not ready for production.

Unfinished Marketplace API. So far, users can create ads and send purchase requests.

## The Challenge

We've created the biggest part of the app during the classes. The actual challenge was to create a way for ad authors to accept the purchase and remove the ads that have already been puchased from the index.

You can read the challenge description (as well as chekout the teacher's code) [here](https://github.com/Rocketseat/bootcamp-nodejs-desafio-03)

## How to install

Clone the repo and run `yarn` on the root directory

Run Docker Image for MongoDB and Redis:

```
docker run --name mongonode -p 27017:27017 -d -t mongo
docker run --name noderedis -p 6379:6379 -d -t redis:alpine
```

Create a `.env` file in the project root and set the following variables:

```
NODE_ENV=development | production
APP_SECRET=MySuperSecret

DB_URI=mongodb://localhost:27017/gonode03

MAIL_HOST=smtp.mydomain.com
MAIL_PORT=456
MAIL_USER=no-reply@mydomain.com
MAIL_PASS=MySuperSecretPassword

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

SENTRY_DSN=
```
