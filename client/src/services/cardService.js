import axios from "axios"

const getAll = async () => {
  return (await axios.get("/api/cards")).data
}

const create = async (card) => {
  const cardToBeCreated = {
    content: card.content,
    language: card.language
  }
  try {
    const createdCard = await axios.post("/api/cards", cardToBeCreated)
    return createdCard.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}


export default { getAll, create }