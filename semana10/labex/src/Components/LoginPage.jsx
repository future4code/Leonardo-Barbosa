import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import labex from '../img/labex.png'
import Button from '@material-ui/core/Button'
import {goToHomePage} from '../Router/GoToPages'
import {goToListTripsPage} from '../Router/GoToPages'


const ContainerHome = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
  `

const ContainerMain = styled.div`
  display:flex;
  align-items:center;
  margin:20px;
  Button{
     margin-left:50px;
  }
  
  `



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
      }).catch((erro) => {})
  }
  
  return (
    <div>
      <ContainerMain>
      <img src={labex}></img>
        <Button variant="contained" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
        <Button variant="contained" color="primary" onClick={() => goToListTripsPage(history)}>Viagens</Button>
      </ContainerMain>
      <ContainerHome>
        <h2>Login para Administrador</h2>
        <TextField label="Email" variant="outlined" required value={emailValue} onChange={handleEmailChange} />
        <TextField label="Senha" variant="outlined" required value={passwordValue} onChange={handlePasswordChange} type="password"/>
        <button onClick={handleLogin}>Fazer Login</button>
      </ContainerHome>
    </div>
  )
}

export default LoginPage