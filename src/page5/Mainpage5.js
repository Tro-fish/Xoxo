import React from "react";
import Gif from "./webgif_2.gif";

function Mainpage5() {
  return (
    <div style={{ width: "100%", height: "900px", overflow: "clip" }}>
      <img
        style={{
          width: "1900px",        
         // marginLeft : '200px',        
         marginTop : '-150px'          
        }}
        src={Gif}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "3970px",
          left: "450px",
          fontSize: "40px",
          color: "#707070",
          fontFamily : 'jalnan'
        }}
      >
        동네에서 소소하게
      </div>
      <div
        style={{
          position: "absolute",
          top: "4020px",
          left: "450px",
          fontSize: "100px",
          color: "#1DFBB8",
          fontFamily : 'jalnan'
        }}
      >
        Xoxo
      </div>
      <div
        style={{
          position: "absolute",
          top: "4170px",
          left: "450px",
          fontSize: "20px",
          color: "#B9B9B9",
          fontFamily : 'jalnan'
        }}
      >
        이웃들과 충분한 대화 후,<br></br> 거래 약속을 잡아보세요
      </div>
    </div>
  );
}

export default Mainpage5;
