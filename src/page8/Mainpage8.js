import React from "react";
import Logo from "./xoxo1.png";
import { Route, Link } from "react-router-dom";
function Mainpage8() {
  return (
    <div
      style={{ width: "1920px", height: "500px", backgroundColor: "#F6F6F6" }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={Logo}
          style={{ width: "250px", marginLeft: "300px", marginTop: "50px" }}
        ></img>
        <a
          target="_blank"
          href=""
          style={{
            fontSize: "20px",
            color: "gray",
            textDecorationLine: "none",
            marginTop: "100px",
            marginLeft: "150px",
            fontFamily : 'pretendard'
          }}
        >
          개인정보 수집 및 이용 동의
        </a>
        <a
          target="_blank"
          href=""
          style={{
            fontSize: "20px",
            color: "gray",
            textDecorationLine: "none",
            marginTop: "100px",
            marginLeft: "50px",
            fontFamily : 'pretendard'
          }}
        >
          개인정보처리방침
        </a>
        <a
          target="_blank"
          href=""
          style={{
            fontSize: "20px",
            color: "gray",
            textDecorationLine: "none",
            marginTop: "100px",
            marginLeft: "50px",
            fontFamily : 'pretendard'
          }}
        >
          서비스 이용약관
        </a>
        <a
          target="_blank"
          href=""
          style={{
            fontSize: "20px",
            color: "gray",
            textDecorationLine: "none",
            marginTop: "100px",
            marginLeft: "50px",
            fontFamily : 'pretendard'
          }}
        >
          위치기반서비스 이용약관
        </a>
      </div>
      <div
        style={{
          width: "1400px",
          height: "1px",
          marginLeft: "280px",
          marginTop: "30px",
          backgroundColor: "lightgray",
        }}
      ></div>
      <div style={{ display: "flex", marginTop: "70px" ,fontFamily : 'pretendard'}}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            color: "#707070",
            marginLeft: "300px",
          }}
        >
          쏘쏘마켓 Xoxo
        </div>

        <div
          style={{
            fontSize: "15px",
            color: "#707070",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          |
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            color: "#707070",
          }}
        >
          대표 주희찬
        </div>
        <div
          style={{
            fontSize: "15px",
            color: "#707070",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          |
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            color: "#707070",
          }}
        >
          대표 번호 02-1111-2222
        </div>
      </div>

      <div style={{ display: "flex" ,fontFamily : 'pretendard'}}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            color: "#707070",
            marginTop: "25px",
            marginLeft: "300px",
          }}
        >
          대표 메일 xoxo@xoxo.com
        </div>

        <div
          style={{
            fontSize: "15px",
            color: "#707070",
            marginLeft: "20px",
            marginTop: "25px",
            marginRight: "20px",
          }}
        >
          |
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginTop: "25px",
            color: "#707070",
          }}
        >
          고객문의 메일 xoxo@xoxo.com
        </div>
      </div>

      <div style={{ display: "flex",fontFamily : 'pretendard' }}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            color: "#707070",
            marginTop: "25px",
            marginLeft: "300px",
          }}
        >
          사업자등록번호 000-00-000000
        </div>

        <div
          style={{
            fontSize: "15px",
            color: "#707070",
            marginLeft: "20px",
            marginTop: "25px",
            marginRight: "20px",
            fontFamily : 'pretendard'
          }}
        >
          |
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
            marginTop: "25px",
            color: "#707070",
          }}
        >
          직업정보제공사업신고번호 0000000000000000
        </div>
      </div>

      <div
        style={{
          fontSize: "15px",
          fontWeight: "lighter",
          marginTop: "25px",
          color: "#707070",
          marginLeft: "300px",
          fontFamily : 'pretendard'
        }}
      >
        서울시 주소 어쩌구 서울시 주소 어쩌구 서울시 주소 어쩌구
      </div>
    </div>
  );
}

export default Mainpage8;
