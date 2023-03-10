const fastify = require("fastify")
const Card = require("../models/card.js")

const cardRouter = (fastify, options, done) => {
  fastify.get("/api/cards", async (req, res) => {
    const allCards = await Card.find({})
    // console.log(allCards)

    res.header("Access-Control-Allow-Origin", "*")
    res.send(allCards)
  })

  fastify.post("/api/cards", async (req, res) => {
    const { content, language } = req.body
    
    const cardToBeCreated = new Card({
      content: content,
      language: language
    })
    // Check if card with content already exists
    const duplicate = await Card.findOne({ content: content })
    if (duplicate) return res.code(400).send({ error: "Card already exists" })
    
    try {
      const createdCard = await cardToBeCreated.save()
      // console.log(createdCard)
      return res.code(201).send(createdCard)
    } catch (e) {
      console.log(e.data.error)
      return res.code(400).send({ error: "Card creation error" })
    }
  })

  done()
}

module.exports = cardRouter
