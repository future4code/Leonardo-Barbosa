import React, {useEffect} from 'react'
import { Input, Stack, Box } from "@chakra-ui/core"
import { Button, Container } from "@chakra-ui/core"
import useForm from '../../hooks/UseForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const SingUpPage = () => {
  const history = useHistory()
  const {form, onChange, resetState}  = useForm({
    email:"",
    password:"",
    username:""    
  })

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) {
      history.push("/feed")
    }
  }, [history])
  
  const createUser = () =>{
    
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", form)
      .then(response => {
        localStorage.setItem("token", response.data.token)
      })
      .catch(erro =>{})
  }
  
  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  } 
  
  const handleSubmittion = (event) =>{
    event.preventDefault()
    createUser()
    resetState()
  }  
  return (
    <>
      <Container maxW="xl" centerContent >
      <form onSubmit={handleSubmittion}  autoComplete="off"> 
        <Box padding="4"  maxW="3x1" >
          <Stack spacing={4} w="300px">
            <Input name="username" required value={form.username} onChange={handleInputChange} type="text" placeholder="Digite seu Nome" size="md" />
            <Input name="email" required value={form.email} onChange={handleInputChange} type="email" placeholder="E-mail" size="md" />
            <Input name="password" required value={form.password} onChange={handleInputChange} type="password" placeholder="Digite a Senha" size="md" />
            <Button type="submit" colorScheme="blue" size="md" >Cadastrar</Button>
          </Stack>
        </Box>
      </form>
    </Container>
    </>
  )
}

export default SingUpPage
