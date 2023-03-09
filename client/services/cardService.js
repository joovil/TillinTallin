import axios from "axios"

export const getAll = async () => {
  return (await axios.get("/api/cards")).data
}
