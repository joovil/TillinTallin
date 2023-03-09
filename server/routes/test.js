import Card from "../models/card.js"

const testRoute = (fastify, options, done) => {
  fastify.get("/", async (req, res) =>{
    return { hello: "world"}
  })
  
  fastify.post("/test", async (req, res) => {
    const testCard = new Card({
      content: "testing"
    })
  
    const duplicate = Card.findOne({ content: "testing "})
    if (duplicate)
      return res.code(400).send({ error: "Card already exists" })

    try {
      await testCard.save()
      return res.code(200).send({ message: "Card created successfully" })
    } catch (e) {
      console.log(e
        )
      return res.code(400).send({ error: "Error " })
    }

  })

  done()
}

export default testRoute