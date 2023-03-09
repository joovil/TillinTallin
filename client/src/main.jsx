import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  } */

  body {
    margin: 0;
    justify-content: center;
    background: #242424;
    
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    color: rgba(255, 255, 255, 0.87);

    box-sizing: border-box;
    overflow: hidden;
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
