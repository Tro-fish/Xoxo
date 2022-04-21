import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Banner from "../News/Banner";
import Event from "../News/Event/event.js";
import Content from "../News/XOXO/contents.js"

export default function xoxoNews03() {
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