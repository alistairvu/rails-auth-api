import Container from "react-bootstrap/Container"
import AppRegistration from "../../components/AppRegistration"
import AppLogin from "../../components/AppLogin"
import AppLogout from "../../components/AppLogout"
import { useSelector } from "react-redux"
import { rootState } from "../../redux"

const Home: React.FC = () => {
  const loggedInStatus = useSelector(
    (state: rootState) => state.user.loggedInStatus
  )

  return (
    <Container>
      <h1>Home</h1>
      <h3>Logged in: {loggedInStatus ? "Yes" : "No"} </h3>
      {loggedInStatus ? (
        <AppLogout />
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
