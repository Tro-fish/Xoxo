import React from "react";
import { Route, Routes } from "react-router-dom";
import CoIntro from "./Pages/coIntro";
import Info from "./Pages/info";
import Mainpage from './Pages/mainpage';
import XoxoNews01 from "./Pages/xoxoNews01";
import XoxoNews02 from "./Pages/xoxoNews02";
import XoxoNews03 from "./Pages/xoxoNews03";
import FAQ01 from "./Pages/faq01";
import FAQ02 from "./Pages/faq02";
import FAQ03 from "./Pages/faq03";
import FAQ04 from "./Pages/faq04";



function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Mainpage></Mainpage>} />
        <Route path='/mainpage.js' element={<Mainpage></Mainpage>} />
        <Route path='/info.js' element={<Info></Info>} />
        <Route path='/coIntro.js' element={<CoIntro></CoIntro>} />
        <Route path='/xoxoNews01.js' element={<XoxoNews01></XoxoNews01>} />
        <Route path='/xoxoNews02.js' element={<XoxoNews02></XoxoNews02>} />
        <Route path='/xoxoNews03.js' element={<XoxoNews03></XoxoNews03>} />
        <Route path='/faq01.js' element={<FAQ01></FAQ01>} />
        <Route path='/faq02.js' element={<FAQ02></FAQ02>} />
        <Route path='/faq03.js' element={<FAQ03></FAQ03>} />
        <Route path='/faq04.js' element={<FAQ04></FAQ04>} />
      </Routes>
    </div>
  );
}

export default App;
