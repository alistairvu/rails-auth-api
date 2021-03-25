import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { loginUser } from "../../redux/user"
import { useHistory } from "react-router-dom"

interface LoginInfoInterface {
  email: string
  password: string
}

const AppLogin: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfoInterface>({
    email: "",
    password: "",
  })
  const [loginError, setLoginError] = useState<string>("")
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "/api/sessions",
        { user: loginInfo },
        { withCredentials: true }
      )
      console.log(data)
      if (data.logged_in) {
        dispatch(loginUser(data))
      }
      history.push("/dashboard")
    } catch (err) {
      setLoginError(err.response.data.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="login-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email..."
            value={loginInfo.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="login-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password..."
            value={loginInfo.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {loginError && <Alert variant="danger">{loginError}</Alert>}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  )
}

export default AppLogin
