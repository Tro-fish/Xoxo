import React from "react";
import Gif from "./2.gif";
import styles from '../style.css';
function Mainpage4() {
  return (
    <div
      style={{ width: "1920px", height: "930px", backgroundColor: "#F4FFF7",overflow : 'hidden' }}
    >
      <img
        style={{ width: "1900px", marginLeft: "0px",marginTop : '-130px' }}
        src={Gif}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "3120px",
          left: "1150px",
          fontSize: "40px",
          color: "#707070",
          fontFamily : 'jalnan'
        }}
      >
        손쉽게 이용하는
      </div>
      <div
        style={{
          position: "absolute",
          top: "3150px",
          left: "1150px",
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
          top: "3300px",
          left: "1150px",
          fontSize: "20px",
          color: "#B9B9B9",
          fontFamily : 'jalnan'
        }}
      >
        가격 걱정 없이 평균 거래되는<br></br> 가격 범위를 표시해줘요 !
      </div>
    </div>
  );
}

export default Mainpage4;
