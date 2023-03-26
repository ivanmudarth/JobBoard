import * as React from 'react'
import { useState } from "react";
import Filter from './components/Filter'
import { ChakraProvider } from '@chakra-ui/react'
import SignInCard from './components/Login Page/SignIn'
import SignupCard from './components/Login Page/Singup'
import LandingPage from './components/Login Page/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filter/" element={<ChakraProvider><Filter/></ChakraProvider>} />
      </Routes>
    </div>

  )
}

export default App;
