import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Content from "../MainEvents/contents";

export default function coIntro() {
    return(
        <div>
            <HeadLine />
                <Content/>         
            <Info/>
        </div>
    )
}