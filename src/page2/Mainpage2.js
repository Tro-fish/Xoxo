import React from "react";
import Talk from "./talk.png";
import Profile from "./profile.jpg";

function Mainpage2() {
  return (
    <div
      style={{ width: "100%", height: "900px", backgroundColor: "#F4FFF7" }}
    >
      <div style={{ paddingTop: "120px" }}>
        <div style={{ fontSize: "40px", color: "#707070", marginLeft: "15%",fontFamily : 'jalnan'  }}>
          자신감있게 추천하는
        </div>
        <div style={{ fontSize: "85px", color: "#1DFBB8", marginLeft: "15%",fontFamily : 'jalnan' }}>
          Xoxo
        </div>
        <img
          src={Profile}
          style={{
           width : '19%',
            marginLeft: "15%",
            marginTop: "20px",
            boxShadow: "0px 3px 6px #B2B2B2",
          }}
        >         
        </img>
      </div>

      <img
        src={Talk}
        style={{
          position: "absolute",
          top: "1060px",
          left: "620px",
          width: "870px",
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "1240px",
          left: "795px",
          fontFamily : 'pretendard',
          fontSize: "30px",
        }}
      >
        소중한 시간을 가치있는 곳에 투자하세요!
      </div>
      <div
        style={{
          position: "absolute",
          top: "1350px",
          left: "760px",
          color: "#707070",
          fontSize: "30px",
          fontFamily : 'pretendard',
        }}
      >
        대표
      </div>
      <div
        style={{
          position: "absolute",
          top: "1338px",
          left: "830px",
          color: "#707070",
          fontSize: "40px",
          fontFamily : 'pretendard',
        }}
      >
        주희찬
      </div>
      <div
        style={{
          width: "400px",
          height: "1px",
          position: "absolute",
          top: "1410px",
          left: "760px",
          backgroundColor: "#707070",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "1430px",
          left: "760px",
          color: "#707070",
          fontSize: "20px",
          fontFamily : 'pretendard',
        }}
      >
        안녕하세요. “Xoxo” 대표 <span style = {{fontWeight : 'bold', fontSize : '25px'}}>주희찬</span> 입니다 !<br></br> 제가 이 어플을
        개발한 이유는 사람들에게 편의성을 주기 위함임니다. <br></br>요즘 세상,
        모든분들이 너무나도 바쁜 일상들을 살아가고 있습니다. 여러 살림적인 부분,
        일적인 부분 등<br></br> 해결해 나가기 어려운 상황들을 이 어플 하나로
        해결할 수 있는 “공간” 을 제시하고 싶었습니다. <br></br>
        <br></br>여러분들의 소중한 시간을 가치 있는 곳에 투자하고, 힘든 부분을
        어플을 통해 해결하세요 !<br></br> 또한, Xoxo는 여러분들의 피드백과
        의견을 항상 적극 수렴하고, 발전시킬 것 입니다.<br></br> 믿고
        이용해주셔도 괜찮습니다. 감사합니다 !
      </div>
    </div>
  );
}

export default Mainpage2;
