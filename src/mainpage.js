import React from "react";
/*import Mainpage1 from "./page1/Mainpage1";
import Mainpage2 from "./page2/Mainpage2";
import Mainpage3 from "./page3/Mainpage3";
import Mainpage4 from "./page4/Mainpage4";
import Mainpage5 from "./page5/Mainpage5";
import Mainpage6 from "./page6/Mainpage6";
import Mainpage7 from "./page7/Mainpage7";
import Mainpage8 from "./page8/Mainpage8";*/
import HeadLine from "./screen/HeadLine";
import Mainpage from "./screen/Mainpage";
import Main01 from "./screen/Main01";
import Main02 from "./screen/Main02";
import Main03 from "./screen/Main03";
import Main04 from "./screen/Main04";
import MainInfo from "./screen/MainInfo";
import { Route, Routes } from "react-router-dom";

export default function mainpage() {
     return(
        <div>
          {/*<Mainpage1/>
          <Mainpage2/>
          <Mainpage3/>
          <Mainpage4/>
          <Mainpage5/>
          <Mainpage6/>
          <Mainpage7/>
          <Mainpage8/>*/}
        
         <HeadLine />
         <Mainpage />
         <Main01 />
         <Main02 />
         <Main03 />
         <Main04 />
         <MainInfo/>
        </div>
    )
}