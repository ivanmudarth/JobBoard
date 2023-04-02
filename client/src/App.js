import * as React from "react";
import Filter from "./components/Filter";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import View from "./components/View";
import Employer from "./components/Employer";
import LandingPage from './components/Login Page/LandingPage';
import Home from "./components/Home";
import JobPostingForm from "./components/JobPostingForm";
function App() {
  return (
    <div className="App">
       <ChakraProvider>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/postjob/:id" element={<JobPostingForm />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/filter/:id" element={<Filter/>} />
        <Route path="/view/:id/:userID" element={<View />} />
        <Route path="/employer/:id/:userID" element={<Employer />} />
      </Routes>
       </ChakraProvider>
    </div>

  )
}

export default App;
