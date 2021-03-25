import Container from "react-bootstrap/Container"
import AppRegistration from "../../components/AppRegistration"
import AppLogin from "../../components/AppLogin"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../../redux/user"
import { rootState } from "../../redux"
import Button from "react-bootstrap/Button"
import axios from "axios"

const Home: React.FC = () => {
  const loggedInStatus = useSelector(
    (state: rootState) => state.user.loggedInStatus
  )
  const dispatch = useDispatch()

  const handleLogoutClick = async () => {
    try {
      const { data } = await axios.delete("/api/logout", {
        withCredentials: true,
      })
      if (data.logged_out) {
        dispatch(logoutUser())
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <h1>Home</h1>
      <h3>Logged in: {loggedInStatus ? "Yes" : "No"} </h3>
      {loggedInStatus ? (
        <Button onClick={handleLogoutClick} variant="primary">
          Log out
        </Button>
      ) : (
        <>
          <h2 className="mt-3">Register:</h2>
          <AppRegistration />
          <h2 className="mt-3">Login</h2>
          <AppLogin />
        </>
      )}
    </Container>
  )
}

export default Home
