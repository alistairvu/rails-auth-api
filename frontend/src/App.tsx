import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"
import axios from "axios"
import { useEffect } from "react"
import { loginUser, logoutUser } from "./redux/user"
import { useDispatch } from "react-redux"

const App: React.FC = () => {
  const dispatch = useDispatch()

  const checkLoginStatus = async () => {
    try {
      const { data } = await axios.get("/api/logged_in", {
        withCredentials: true,
      })

      if (data.logged_in) {
        dispatch(loginUser(data.user))
      } else if (!data.loggedIn) {
        dispatch(logoutUser())
      }
    } catch (err) {
      console.log("Check login error: ", err)
    }
  }

  useEffect(() => {
    checkLoginStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
