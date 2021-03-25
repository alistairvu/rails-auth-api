import Button from "react-bootstrap/Button"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logoutUser } from "../../redux/user"

const AppLogout: React.FC = () => {
  const dispatch = useDispatch()
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false)

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      const { data } = await axios.delete("/api/logout", {
        withCredentials: true,
      })
      if (data.logged_out) {
        dispatch(logoutUser())
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoggingOut(false)
    }
  }
  return (
    <Button onClick={handleLogout} variant="primary" disabled={isLoggingOut}>
      {isLoggingOut ? "Logging out..." : "Log out"}
    </Button>
  )
}

export default AppLogout
