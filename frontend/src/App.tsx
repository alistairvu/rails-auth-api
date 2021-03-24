import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"

const App: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </main>
  )
}

export default App
