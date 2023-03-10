const server = require("./server.js")
const config = require("./config.js")

const PORT = config.PORT || 3003
server.listen({ port: PORT, host: "0.0.0.0" })
  .then(console.log("Connected to port ", PORT))
  .catch(err => console.error(err))