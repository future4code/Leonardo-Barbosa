import React, {useState, useEffect} from 'react'
import { Input, Stack, Box } from "@chakra-ui/core"
import { Button, Container } from "@chakra-ui/core"
import { useHistory } from 'react-router-dom'
import { goToSingUp } from '../../router/GoToPages'
import axios from 'axios'

const LoginPage = () => {
  const history = useHistory()
  
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) {
      history.push("/feed")
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
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        history.push("/feed")
      }).catch((erro) => {})
  }



  return (
    <Container maxW="xl" centerContent >
      <Box padding="4"  maxW="3x1">
        <Stack spacing={4} w="300px">
          <Input  autoComplete="off" name="email" value={emailValue} onChange={handleEmailChange} type="email" placeholder="E-mail" size="md" />
          <Input name="password" value={passwordValue} onChange={handlePasswordChange} type="password" placeholder="Digite a Senha" size="md" />
          <Button colorScheme="blue" size="md" onClick={handleLogin}>Entrar</Button>
          <Button onClick ={() =>goToSingUp(history)}colorScheme="blue" size="md" variant="link">Cadastre-se Aqui</Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default LoginPage
