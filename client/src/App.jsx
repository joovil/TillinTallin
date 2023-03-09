import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./components/Card.jsx"
import cardService from "./services/cardService.js"

const Title = styled.h1`
  margin-bottom: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  /* margin: auto; */
  height: 99vh;
`

const TitleContainer = styled.div`
  flex: 0 1;
  /* border:2px solid red ; */
`

const BottomContainer = styled.div`
  flex: 1;
  /* border: 2px solid red; */
`

function App() {
  const [cards, setCards] = useState([""])
  
  useEffect(() => {
    cardService.getAll()
      .then(cards => {
        const shuffledCards = cards.sort((a,b) => 0.5 - Math.random())
        setCards(shuffledCards)
      })
  }, [])

  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Tillin Tallin</Title>
          <div>Oispa kaljaa</div>
        </TitleContainer>

        <BottomContainer>
          <Card cards={cards}/>
        </BottomContainer>
      </Container>
    </>
  )
}
export default App
