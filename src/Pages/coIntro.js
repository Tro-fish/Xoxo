import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Introduction01 from "../Introduction/Introduction01";
import Introduction02 from "../Introduction/Introduction02";
import { BrowserView, MobileView } from 'react-device-detect';
import { Route, Routes } from "react-router-dom";

export default function coIntro() {
     return(
        <div>
        <BrowserView>
        <div>
            <HeadLine />
            <Introduction01 />
            <Introduction02/>
            <Info/>
        </div>
        </BrowserView>
        <MobileView>
            <h1>Main01</h1>
        </MobileView>
        </div>
    )
}