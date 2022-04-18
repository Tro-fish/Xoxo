import React from "react";
import { Route, Routes } from "react-router-dom";
import CoIntro from "./coIntro";
import Info from "./info";
import Mainpage from './mainpage';
import XoxoNews from "./xoxoNews";

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Mainpage></Mainpage>} />
        <Route path='/mainpage.js' element={<Mainpage></Mainpage>} />
        <Route path='/info.js' element={<Info></Info>} />
        <Route path='/coIntro.js' element={<CoIntro></CoIntro>} />
        <Route path='/xoxoNews.js' element={<XoxoNews></XoxoNews>} />
      </Routes>
    </div>
  );
}

export default App;
