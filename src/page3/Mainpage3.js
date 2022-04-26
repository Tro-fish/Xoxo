import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

function Mainpage3() {
  return (
  <div>
    <BrowserView>
    <div style={{ width: "100%", height: "900px" }}>
        <div style = {{paddingTop : '150px'}}></div>
      <div
        style={{
          width: "1200px",
          height: "600px",
          backgroundColor: "#707070",         
          marginLeft: "380px",
          boxShadow: "0px 3px 6px #B2B2B2",
        }}
      ></div>
    </div>
    </BrowserView>
    <MobileView>

    </MobileView>
  </div>
  );
}

export default Mainpage3;
