import axios from "axios"

const getAll = async () => {
  return (await axios.get("/api/cards")).data
}


export default { getAll }