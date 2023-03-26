
import * as React from 'react'
import { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import SignInCard from './SignIn';
import SignupCard from './Singup';

export default function LandingPage() {
const [signinBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!signinBool)
  }

  return (
    signinBool ? (
    <ChakraProvider>
      <SignInCard toggleBool={toggleBool}/>
    </ChakraProvider>
    ) : 
    <ChakraProvider>
      <SignupCard toggleBool={toggleBool}/> 
    </ChakraProvider>
  );
}