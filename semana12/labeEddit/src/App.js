import React from 'react'
import Router from './router/Router'
import { ChakraProvider, Box } from "@chakra-ui/core"
import { BrowserRouter } from 'react-router-dom'



const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box bg="blue.400" h="70px" w="100%" marginBottom="20" >
        </Box>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
