const Fastify =  require("fastify")
const mongoose = require("mongoose")
const path = require("path")
const config = require("./config.js")

const cardRouter = require("./routes/cardRouter.js")
// mongo connection
mongoose
  .connect(config.MONGO_URI, { autoIndex: true })
  .then(() => console.log("Connected to MongoDB", config.MONGO_URI))
  .catch((err) => {
    console.error(config.MONGO_URI)
    console.error(err)
  })

// fastify server
const server = Fastify({
  logger: true,
})
//console.log(path.join(__dirname, "dist"))
server.register(require("@fastify/static"), {
  root: path.join(__dirname, "dist")
})

server.register(cardRouter)

module.exports = server
