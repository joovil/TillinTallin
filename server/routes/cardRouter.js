const fastify = require("fastify")
const Card = require("../models/card.js")

const cardRouter = (fastify, options, done) => {
  fastify.get("/api/cards", async (req, res) => {
    const allCards = await Card.find({})
    console.log(allCards)

    res.header("Access-Control-Allow-Origin", "*")
    res.send(allCards)
  })

  fastify.post("/api/cards", async (req, res) => {
    const { content, language } = req.body
    
    console.log(content, language)
    const testCard = new Card({
      content: content,
      language: language
    })

    const duplicate = await Card.findOne({ content: cardContent })
    console.log(duplicate)

    if (duplicate) return res.code(400).send({ error: "Card already exists" })

    try {
      await testCard.save()
      return res.code(200).send({ message: "Card created successfully" })
    } catch (e) {
      console.log(e)
      return res.code(400).send({ error: "Card creation error" })
    }
  })

  done()
}

module.exports = cardRouter
