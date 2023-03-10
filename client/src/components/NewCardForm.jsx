import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import cardService from "../services/cardService.js"

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 90%;

  margin: auto;

  border: 8px solid rgba(255, 255, 255, 0.87);
  border-radius: 20px;
`
const Title = styled.h1`
  margin-bottom: 1rem;
`
const CardForm = styled.form`
  /* height: 100%; */
  width: 100%;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  height: 100%;
`
const CardFormTextarea = styled.textarea`
  height: 20vh;
  vertical-align: top;
`
const Notification = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 3rem;
  border: 6px white solid;
  border-radius: 20px;
  width: 90%;
  height: 20vh;
  align-items: center;
`

const NewCardButton = styled.button`
  margin: 0;
  height: 5vh; 
  border-radius: 10px;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`

const BackButton = styled.button`
  height: 50px;
  width: 100%;
`

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  position: absolute;
  bottom: 1rem;
`

const NewCardForm = () => {
  const [newCardContent, setNewCardContent] = useState("")
  const [language, setLanguage] = useState("")
  const [notification, setNotification] = useState("")

  const navigate = useNavigate()

  const createNewCard = async (e) => {
    e.preventDefault()

    const cardToBeCreated = {
      content: newCardContent,
      language: language
    }
    
    const newCard = await cardService.create(cardToBeCreated)
    setNewCardContent("")
    setLanguage("")
    
    newCard.error
      ? setNotification(newCard.error)
      : setNotification("Card created successfully")

    setTimeout(() => setNotification(""), 3000)
  }

  return (
    <Wrapper>
      <Title>Luo uusi kortti</Title>Luo uusi kortti
      <CardForm onSubmit={createNewCard}>
        <CardWrapper>
          <br />
          <CardFormTextarea
            placeholder="Kortin sisältö"
            required
            onChange={(e) => setNewCardContent(e.target.value)}
            value={newCardContent}
            
          />
          <p
            style={{
              margin: 0,
              marginTop: "1rem",
              textDecoration: "underline",
            }}
          >
            Kortin kieli
          </p>
          <label>
            Suomi
            <input 
              type="radio" 
              name="language" 
              value="fin" 
              onChange={(e) => setLanguage(e.target.value)}
              checked={language === "fin"}
              required 
              />
          </label>
          <label>
            English
            <input 
              type="radio" 
              name="language" 
              value="eng" 
              onChange={(e) => setLanguage(e.target.value)}
              checked={language == "eng"}
            />
          </label>
          <ButtonWrapper>
            <NewCardButton style={{ margin: "1rem" }}>Luo kortti</NewCardButton>
          </ButtonWrapper>
        </CardWrapper>
      </CardForm>
      {notification && 
      <Notification>
        {notification}  
      </Notification>
      }
      <BackButtonWrapper>
        <BackButton onClick={() => navigate("/")}>Peliin</BackButton>
      </BackButtonWrapper>
    </Wrapper>
  )
}

export default NewCardForm
