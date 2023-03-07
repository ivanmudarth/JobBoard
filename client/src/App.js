import * as React from 'react'
import Filter from './components/Filter'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Filter />
    </ChakraProvider>
  )
}

export default App;
