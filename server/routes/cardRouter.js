const fastify = require("fastify")
const Card = require("../models/card.js")

const cardRouter = (fastify, options, done) => {
  fastify.get("/api/cards", async (req, res) => {
    const allCards = await Card.find({})
    console.log(allCards)

    res.header("Access-Control-Allow-Origin", "*")
    res.send(allCards)
  })

  done()
}

module.exports = cardRouter