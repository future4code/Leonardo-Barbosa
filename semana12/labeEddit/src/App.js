import React from 'react'
import Router from './router/Router'
import { ChakraProvider, Box, Text, Img } from "@chakra-ui/core"
import { BrowserRouter } from 'react-router-dom'
import alien from './img/alien.svg'



const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box bg="blue.400" h="60px" w="100%" marginBottom="20" d="flex" alignItems="start" >
        <Img boxSize="60px" src ={alien} marginLeft="2vw" color="white"/>
        <Text fontFamily="monospace" fontSize="40px" marginLeft="5px" color="white">Labeddit</Text>
        </Box>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
