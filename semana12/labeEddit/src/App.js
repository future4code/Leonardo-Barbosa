import React from 'react'
import Router from './router/Router'
import { ChakraProvider, Box, Text, Img, Button } from "@chakra-ui/core"
import { BrowserRouter } from 'react-router-dom'
import alien from './img/alien.svg'

const App = () => {
  

  const logout = () => {
    localStorage.removeItem("token")
  }


  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box bg="blue.400" h="60px" w="100%" marginBottom="20" d="flex" justifyContent="space-between">
        <Box d="flex">
        <Img boxSize="60px" src ={alien} marginLeft="2vw" color="white"/>
        <Text fontFamily="monospace" fontSize="40px" marginLeft="5px" color="white">Labeddit</Text>
        </Box>
        <Box>
        <Button marginTop="2" marginRight="3" onClick={logout} >Logout</Button>
        </Box>
        </Box>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
