import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Content from "../MainEvents/contents";
import Banner from "../MainEvents/banner";


const media = {
    phone : '@media(max-width: 500px)'
};


export default function coIntro() {
    return(
        <div>
            <HeadLine />
                <Content />
                <Banner/>
            <Info/>
        </div>
    )
}