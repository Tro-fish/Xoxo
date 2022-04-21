import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Banner from "../News/Banner";
import Event from "../News/Event/event.js";
import Content from "../News/Broad/contents.js"

export default function xoxoNews02() {
     return (
          <div>
               <HeadLine />
               <Banner />
               <Event />
               <Content/>
               <Info/>
          </div>
    )
}