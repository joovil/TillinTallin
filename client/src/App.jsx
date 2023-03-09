import './App.css'
import * as cardService from "../services/cardService.js"
import { useEffect } from 'react'

function App() {

useEffect(() => {
  try {
    cardService.getAll()
      .then((test) => console.log(test))
  } catch (error) {
    console.log(error)
  }
}, [])

  return (
    <div>
      <h1>TillinTallin</h1>
      <br/>
      Oispa kaljaa
    </div>
  )
}

export default App
