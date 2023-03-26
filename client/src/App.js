import * as React from "react";
import Filter from "./components/Filter";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import View from "./components/View";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Filter />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
