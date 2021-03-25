import { render } from "react-dom"
import App from "./App"
import "./styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import store from "./redux"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
)
