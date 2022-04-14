import React from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./info";
import Mainpage from './mainpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Mainpage></Mainpage>} />      
        <Route path='/info.js' element={<Info></Info>} />      
      </Routes>
    </div>
  );
}

export default App;
