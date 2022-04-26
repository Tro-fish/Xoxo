import React from "react";
import xoxo1 from "./xoxo1.png";
import Google from "./Google-Play.png";
import Apple from "./Apple_Store.png";
import Phone from "./Phone_original.png";
import Character from "./Xoxo-character.gif";
import styles from '../style.css';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

function Mainpage1() {
  const Google_btn = () => {
    alert("곧 플레이스토어에 출시 예정입니다!");
  };
  const Apple_btn = () => {
    alert("곧 앱스토어에 출시 예정입니다!");
  };
  const Question_btn = () => {
    alert("현재 준비중인 서비스입니다!");
  };
  return (
    <div>
    <BrowserView>
    <div style ={{overflow : 'hidden', width: "100%"}}>
      <div
        style={{
          width: "100%",
          height: "120px",
          boxShadow: "0px 3px 5px #5BF6C7",
          display: "flex",
          alignItems: "center",
        }}
      >
        
        <div style ={{marginLeft: "12%",width:'100px',height:'100px',backgroundColor : 'white',borderRadius : '20px',boxShadow: "0px 1px 2px #B2B2B2",}}>
          <sapn style = {{position : 'absolute', top : '15px',marginLeft:'8px',color : '#1DFBB8',fontSize:'65px',fontFamily : 'Jalnan',zIndex :'100'}}>X</sapn>
          <sapn style = {{position : 'absolute', top : '12px',marginLeft:'10px',color : '#F6F6F6',fontSize:'70px',fontFamily : 'Jalnan',zIndex :'10'}}>X</sapn>
          <sapn style = {{position : 'absolute', top : '16px',marginLeft:'48px',color : '#F6F6F6',fontSize:'65px',fontFamily : 'Jalnan',zIndex : '10'}}>o</sapn>
        </div>
        <div style = {{paddingTop:'10px',paddingLeft : '20px',fontSize : '20px',fontFamily : 'Pretendard',color : '#707070'}}>
          소비자마켓
          <div style = {{padding:'0px',marginTop : '-10px',fontSize : '35px',fontFamily : 'Jalnan',color : '#1DFBB8'}}>
          Xoxo
        </div>
        </div>
       
        <button
          onClick={Google_btn}
          style={{
            width: "200px",
            height: "50px",
            marginLeft: "40%",
            borderRadius: "30px",
            marginBottom: "15px",
            border: "0px",
            backgroundColor: "#F6F6F6",
            boxShadow: "0px 3px 5px #B2B2B2",
            cursor: "pointer",
          }}
        >
          <img src={Google} style={{ width: "75%", marginTop: "-15px" }}></img>
        </button>
        <button
          onClick={Apple_btn}
          type={"button"}
          style={{
            width: "200px",
            height: "50px",
            marginLeft: "30px",
            borderRadius: "30px",
            marginBottom: "15px",
            border: "0px",
            backgroundColor: "#F6F6F6",
            boxShadow: "0px 3px 5px #B2B2B2",
            cursor: "pointer",
          }}
        >
          <img src={Apple} style={{ width: "77%", marginTop: "3px" }}></img>
        </button>
      </div>
      <div style={{ width: "100%; height : 900px" }}>
        <div style={{ paddingTop: "250px" }}>
          <div
            style={{
              height: "0",
              borderBottom: "300px solid #F4FFF7",
              borderLeft: "1910px solid transparent",
            }}
          ></div>
          <div
            style={{
              height: "0",
              width: "1920px",
              height: "260px",
              backgroundColor: "#F4FFF7",
            }}
          ></div>
        </div>
      </div>
      <img
        src={Phone}
        style={{
          width: "1250px",
          position: "absolute",
          top: "200px",
          left: "33.5%",
          zIndex: "100",
        }}
      ></img>
      <img
        src={Character}
        style={{
          width: "250px",
          position: "absolute",
          top: "160px",
          left: "48.5%",
          zIndex: "10",
        }}
      ></img>

      <div>
        <div
          style={{
            fontSize: "28px",
            position: "absolute",
            top: "200px",
            left: "10%",
            color: "#707070",
            fontFamily : 'pretendard'
          }}
        >
          <b>소비자와 소비자</b> 사이에서 <br></br> 이루어지는 <b>능력거래</b>
        </div>
        <div
          style={{
            fontSize: "109px",
            position: "absolute",
            top: "260px",
            left: "10%",
            color: "#1DFBB8",
            fontFamily : 'jalnan'
          }}
        >
          Xoxo
        </div>
        <div
          style={{
            fontSize: "22px",
            position: "absolute",
            top: "400px",
            left: "10%",
            color: "#707070",
            fontFamily : 'pretendard'
          }}
        >
          사소한 도움, 어려운 도움 고민하지 말고, <br></br> "Xoxo"
          어플리케이션을 통해 요청하세요!
        </div>
        <button
          onClick={Question_btn}
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "30px",
            marginBottom: "15px",
            border: "0px",
            backgroundColor: "#F6F6F6",
            //boxShadow: "0px 3px 5px #B2B2B2",
            cursor: "pointer",
            position: "absolute",
            top: "490px",
            fontSize: "16px",
            color: "#707070",
            fontWeight: "bold",
            left: "11%",
            fontFamily : 'pretendard'
          }}
        >
          자주하는 질문
        </button>
      </div>
    </div>
    </BrowserView>
    <MobileView>
      <h1>모바일 테스트입니다.</h1>
    </MobileView>
    </div>
  );
}

export default Mainpage1;