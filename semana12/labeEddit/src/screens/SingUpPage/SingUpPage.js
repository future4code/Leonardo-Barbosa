import React from 'react'
import { Input, Stack, Box } from "@chakra-ui/core"
import { Button, Container } from "@chakra-ui/core"

const SingUpPage = () => {
  return (
    <div>
      <Container maxW="xl" centerContent >
      <Box padding="4"  maxW="3x1" >
      <Stack spacing={4} w="300px">
        <Input type="text" placeholder="Digite seu Nome" size="md" />
        <Input type="email" placeholder="E-mail" size="md" />
        <Input type="password" placeholder="Digite a Senha" size="md" />
        <Button colorScheme="blue" size="md" >Cadastrar</Button>
      </Stack>
      </Box>
    </Container>
    </div>
  )
}

export default SingUpPage
