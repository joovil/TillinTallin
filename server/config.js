require("dotenv").config()

const MONGO_URI = process.env.NODE_ENV === "development"
? process.env.MONGO_DEV
: process.env.MONGO_PROD

const PORT = 3003

module.exports = { MONGO_URI, PORT }