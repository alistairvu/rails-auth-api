import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"
import axios from "axios"

interface RegisterInfoInterface {
  email: string
  password: string
  password_confirmation: string
}

const AppRegistration: React.FC = () => {
  const [registerInfo, setRegisterInfo] = useState<RegisterInfoInterface>({
    email: "",
    password: "",
    password_confirmation: "",
  })
  const [registrationError, setRegistrationError] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "/api/registrations",
        { user: registerInfo },
        { withCredentials: true }
      )
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email..."
            value={registerInfo.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password..."
            value={registerInfo.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password_confirmation">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            placeholder="Confirm password..."
            value={registerInfo.password_confirmation}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {registrationError && (
          <Alert variant="danger">{registrationError}</Alert>
        )}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  )
}

export default AppRegistration
