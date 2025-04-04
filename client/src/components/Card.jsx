import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  box-sizing: border-box;

  height: 100%;
  width: 90%;

  margin: auto;

  border: 8px solid rgba(255, 255, 255, 0.87);
  border-radius: 20px;
`

const InnerContainer = styled.div`
  box-sizing: border-box;

  height: 100%;
  width: 100%;
  border: 6px #242424 solid;
  border-radius: 20px;
  background: #242424;
  padding: 5px;
`

const CardContent = styled.div`
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items:center;
  
  border-radius: 15px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.87);
  margin: auto;
  
  color: #242424;
  font-size: 24px;
`


function Card({ cards, setCards }) {
  // const randomNumber = () => {
  //   return Math.floor(Math.random() * cards.length)
  // }
  const [cardId, setCardId] = useState(0)


  // console.log(cards)
  const nextCard = () => {
    if (cardId !== cards.length)
      setCardId(prev => prev + 1)
  }
  
  
  return (
    <Container>
      <InnerContainer>
        <CardContent onClick={nextCard}>
          {cards.length === cardId 
          ? <div>Kortit loppuivat</div>
          : <div>{cards[cardId].content}</div>
          }
        </CardContent>
      </InnerContainer>
    </Container>
  )
}
export default Card
