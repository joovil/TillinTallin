const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 1,
  },
  language: String,
  reports: {
    type: Number,
    default: 0,
  },
})

cardSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const Card = mongoose.model("Card", cardSchema)
module.exports = Card
