import React from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Banner from "../News/Banner";
import Event from "../News/Event/event.js";
import Content from "../News/ALL/contents.js"

export default function xoxoNews01() {
     return (
          <div>
               <HeadLine />
               <Banner />
               <Event />
               {/*<Content/>*/}
               <Info/>
          </div>
    )
}