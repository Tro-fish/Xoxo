import React from "react";
import HeadLine from "../Module/HeadLine";
import Mainpage from "../Main/Mainpage";
import Main01 from "../Main/Main01";
import Main02 from "../Main/Main02";
import Main03 from "../Main/Main03";
import Main04 from "../Main/Main04";
import MainInfo from "../Module/MainInfo";

export default function mainpage() {
     return(
        <div>
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