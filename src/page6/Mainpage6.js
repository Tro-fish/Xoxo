import React from "react";
import Commission from "./noun-commission.svg";
import Easy from "./noun-easy.svg";
import Security from "./noun-security.svg";

function Mainpage6() {
  return (
    <div
      style={{ width: "1920px", height: "930px", backgroundColor: "#F4FFF7" }}
    >
      <div
        style={{
          position: "absolute",
          top: "4750px",
          left: "700px",
          color: "#1DFBB8",
          fontSize: "66px",
          fontFamily: "jalnan",
        }}
      >
        Xoxo는 다릅니다
      </div>
      <img
        style={{
          position: "absolute",
          top: "4950px",
          left: "250px",
          width: "300px",
          margin: "0px",
          padding: "0px",
        }}
        src={Security}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "5270px",
          left: "355px",
          margin: "0px",
          padding: "0px",
          color: "#707070",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "jalnan",
        }}
      >
        <span style={{ fontSize: "22px" }}>Pass</span> 인증<br></br>{" "}
        <span style={{ fontSize: "22px" }}>신분증</span> 등록
      </div>

      <img
        style={{
          position: "absolute",
          top: "4950px",
          left: "800px",
          width: "300px",
          margin: "0px",
          padding: "0px",
        }}
        src={Easy}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "5270px",
          left: "905px",
          margin: "0px",
          padding: "0px",
          color: "#707070",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "jalnan",
        }}
      >
        <span style={{ fontSize: "22px" }}>이웃들간</span>의 거래<br></br>
        <span style={{ fontSize: "22px" }}>반경</span> 설정
      </div>
      <img
        style={{
          position: "absolute",
          top: "4950px",
          left: "1350px",
          width: "300px",
          margin: "0px",
          padding: "0px",
        }}
        src={Commission}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "5270px",
          left: "1410px",
          margin: "0px",
          padding: "0px",
          color: "#707070",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "jalnan",
        }}
      >
        <span style={{ fontSize: "22px" }}>수수료률</span> 최저<br></br>어플 내{" "}
        <span style = {{fontSize : '22px'}}>쏘쏘페이</span> 운영
      </div>
    </div>
  );
}

export default Mainpage6;
