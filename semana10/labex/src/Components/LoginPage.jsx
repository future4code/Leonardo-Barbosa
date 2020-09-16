import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function LoginPage() {
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const history = useHistory()
  
  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) {
      history.push("/trips/details")
    }
  }, [history])

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value)
  }

  const handleLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    }

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/login", body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        history.push("/trips/details")
      })
      .catch((erro) => {})
  }
  
  
  
  
  return (
    <div>
      <input value={emailValue} onChange={handleEmailChange} />
      <input value={passwordValue} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Fazer Login</button>
    </div>
  )
}

export default LoginPage