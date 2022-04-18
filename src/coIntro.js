import React from "react";

import HeadLine from "./HeadLine";
import CoIntroInfo from "./Introduction/CoIntroInfo";
import Introduction01 from "./Introduction/Introduction01";
import Introduction02 from "./Introduction/Introduction02";

import { Route, Routes } from "react-router-dom";

export default function coIntro() {
     return(
        <div>
             <HeadLine />
             <Introduction01 />
             <Introduction02/>
            <CoIntroInfo/>
        </div>
    )
}