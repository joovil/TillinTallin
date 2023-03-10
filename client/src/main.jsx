import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import NewCardForm from "./components/NewCardForm.jsx"
import { createGlobalStyle } from "styled-components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/newCard",
    element: <NewCardForm />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <GlobalStyle />
  </React.StrictMode>
)
