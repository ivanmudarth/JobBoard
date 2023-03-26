import * as React from "react";
import Filter from "./components/Filter";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import View from "./components/View";
import LandingPage from './components/Login Page/LandingPage';

function App() {
  return (
    <div className="App">
       <ChakraProvider>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filter/" element={<Filter/>} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
       </ChakraProvider>
    </div>

  )
}

export default App;
