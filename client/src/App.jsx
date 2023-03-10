import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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
  height: 99vh;
`

const TitleContainer = styled.div`
  flex: 0 1;
`

const BottomContainer = styled.div`
  flex: 1;
`

const NewCardNavButton = styled.button`
  position: absolute;
  height: 30px;
  right: 0;
  top: 0;
  border: 2px solid rgba(255, 255, 255, 0.87);
  border-radius: 5px;
  background: none;
  color: rgba(255, 255, 255, 0.87);
`

function App() {
  const [cards, setCards] = useState([""])
  
  const navigate = useNavigate()

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
          <NewCardNavButton onClick={() => navigate("/newCard")}>Luo kortteja</NewCardNavButton>
          <div>Oispa kaljaa</div>
        </TitleContainer>

        <BottomContainer>
          <Card cards={cards} setCards={setCards}/>
        </BottomContainer>
      </Container>
    </>
  )
}
export default App
