import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import backimg from "../image/1.jpg";
import Google from "../image/Google-Play.png";
import Apple from "../image/Apple_Store.png";

const Container = styled.div`
  background-image: url(${backimg});
  background-size: cover;
  display: flex;
  margin-top: 6vh;
  width: 100%;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20vw;
  margin-top: 7vw;
`;

const BtnBox = styled.div`
  display: flex;
  margin-top: 5vw;
  margin-bottom: 7vw;
`;

const Btn = styled.button`
  background-color: white;
  border: 0px;
  border-radius: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0vw 3vw;
  margin: 2vw;
  margin-left: 0px;
  box-shadow: "0px 3px 5px #B2B2B2";
  cursor: pointer;
`;

const Image = styled.img`
  width: 7vw;
`;

const Text1 = styled.text`
  font-family: "pretendard";
  font-size: ${colors.content};
  color: black;
`;

const BText = styled.text`
  font-family: "pretendard";
  font-size: ${colors.title};
  font-weight: 900;
  margin-top: 5vw;
`;

export default function Main04() {
  const Google_btn = () => {
    alert("곧 플레이스토어에 출시 예정입니다!");
  };
  const Apple_btn = () => {
    alert("곧 앱스토어에 출시 예정입니다!");
  };

  return (
    <Container>
      <TextBox>
        <Text1>04.</Text1>
        <BText>APP DOWNLOAD</BText>
        <BtnBox>
          <Btn onClick={Google_btn}>
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
