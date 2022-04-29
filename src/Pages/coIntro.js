import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Introduction01 from "../Introduction/Introduction01";
import Introduction02 from "../Introduction/Introduction02";

export default function coIntro() {
     return(
        <div>
            <HeadLine />
            <Introduction01 />
            <Introduction02/>
            <Info/>
        </div>
    )
}