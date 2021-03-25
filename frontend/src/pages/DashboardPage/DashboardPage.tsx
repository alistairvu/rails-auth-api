import Container from "react-bootstrap/Container"
import AppLogout from "../../components/AppLogout"
import { useSelector } from "react-redux"
import { rootState } from "../../redux"

const Dashboard: React.FC = () => {
  const loggedInStatus = useSelector(
    (state: rootState) => state.user.loggedInStatus
  )

  return (
    <Container>
      <h1>Dashboard</h1>
      <h2>Logged in: {loggedInStatus ? "Yes" : "No"}</h2>
      {loggedInStatus && <AppLogout />}
    </Container>
  )
}

export default Dashboard
