import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import backimg from "../image/4.png";
import Google from "../image/Google-Play.png";
import Apple from "../image/Apple_Store.png";

const Container = styled.div`
  background-image: url(${backimg});
  background-size: 100%;
  display: flex;
  margin-top: 5vh;
  width: 100%;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20vh;
  margin-bottom: 45vh;
  margin-left: 13vw;
`;

const Text1 = styled.text`
  font-family: "Pretendard";
  font-size: ${colors.content};
  font-weight: 500;
  color: black;
  margin-bottom: 7px;
`;

const Text2 = styled.text`
  font-family: "pretendard";
  color: black;
  font-weight: 500;
  font-size: ${colors.semititle};
  margin: 5px 0px;
`;

const Text3 = styled.text`
  font-family: "Pretendard";
  color: white;
  font-weight: 1000;
  font-size: ${colors.title};
  color: ${colors.mint};
`;

const BtnBox = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Btn = styled.button`
  background-color: ${colors.lightGray};
  border: 0px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0vh 2vw;
  margin: 5px;
  margin-left: 0px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 5vw;
`;

export default function Mainpage() {
  const Google_btn = () => {
    alert("곧 플레이스토어에 출시 예정입니다!");
  };
  const Apple_btn = () => {
    alert("곧 앱스토어에 출시 예정입니다!");
  };

  return (
    <Container>
      <TextBox>
        <Text1>LifeU's with your Life</Text1>
        <Text2>
          <Text3>라이프</Text3> 향상을 위한 어플
        </Text2>
        <Text2>
          <Text3>라이푸</Text3> 가 함께합니다.
        </Text2>

        <BtnBox>
          <Btn onClick={Google_btn} style={{ marginRight: "2vw" }}>
            <Image src={Google}></Image>
          </Btn>
          <Btn onClick={Apple_btn}>
            <Image src={Apple}></Image>
          </Btn>
        </BtnBox>
      </TextBox>
    </Container>
  );
}
