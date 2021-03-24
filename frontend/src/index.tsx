import { render } from "react-dom"
import App from "./App"
import "./styles/index.scss"
import { BrowserRouter } from "react-router-dom"

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
