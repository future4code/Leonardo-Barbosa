import React from 'react'
import { Input, Stack, Box } from "@chakra-ui/core"
import { Button, Container } from "@chakra-ui/core"


const LoginPage = () => {
  
  return (
    <Container maxW="xl" centerContent >
      <Box padding="4"  maxW="3x1">
      <Stack spacing={4}>
        <Input type="email" placeholder="E-mail" size="md" />
        <Input type="password" placeholder="Digite a Senha" size="md" />
        <Button colorScheme="blue" size="md">Entrar</Button>
        <Button colorScheme="blue" size="md">Cadastrar</Button>
      </Stack>
      </Box>
    </Container>
  )
}

export default LoginPage
