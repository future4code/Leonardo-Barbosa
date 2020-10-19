import React from 'react';
import Form from './/Components/Form'
import { ChakraProvider } from "@chakra-ui/core"

function App() {

  return (
    <ChakraProvider>
      <Form/>
    </ChakraProvider>
  );
}

export default App;
