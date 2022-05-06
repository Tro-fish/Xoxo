import React from "react";
import styled from "styled-components";
import backimg1_1 from "../image/Contraction/개인정보 수집 및 이용 동의/개인정보 수집 및 이용 동의_0001.png";
import backimg1_2 from "../image/Contraction/개인정보 수집 및 이용 동의/개인정보 수집 및 이용 동의_0002.png";
import backimg1_3 from "../image/Contraction/개인정보 수집 및 이용 동의/개인정보 수집 및 이용 동의_0003.png";
import backimg1_4 from "../image/Contraction/개인정보 수집 및 이용 동의/개인정보 수집 및 이용 동의_0004.png";
import backimg2_1 from "../image/Contraction/개인정보 제3자 제공 동의/개인정보 제3자 제공 동의_0001.png";
import backimg3_1 from "../image/Contraction/라이푸 법적고지/라이푸 법적고지_0001.png";
import backimg3_2 from "../image/Contraction/라이푸 법적고지/라이푸 법적고지_0002.png";
import backimg4_1 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0001.png";
import backimg4_2 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0002.png";
import backimg4_3 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0003.png";
import backimg4_4 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0004.png";
import backimg4_5 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0005.png";
import backimg4_6 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0006.png";
import backimg4_7 from "../image/Contraction/라이푸 어플 서비스 이용약관/라이푸 어플 서비스 이용약관_0007.png";
import backimg5_1 from "../image/Contraction/위치기반서비스 이용약관/위치기반서비스 이용약관_0001.png";
import backimg5_2 from "../image/Contraction/위치기반서비스 이용약관/위치기반서비스 이용약관_0002.png";
import backimg5_3 from "../image/Contraction/위치기반서비스 이용약관/위치기반서비스 이용약관_0003.png";
import backimg5_4 from "../image/Contraction/위치기반서비스 이용약관/위치기반서비스 이용약관_0004.png";
import backimg5_5 from "../image/Contraction/위치기반서비스 이용약관/위치기반서비스 이용약관_0005.png";
const media = {
  desktop: "@media(min-width: 501px)",
  phone: "@media(max-width: 500px)",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8vh;

  ${media.phone} {
    width: 90vw;
    margin-top: 13vh;
  }
`;

const PhotoImg = styled.img`
  width: 60%;
  ${media.phone} {
    width: 90vw;
    margin-top: 13vh;
  }
`;

export default function info() {
  return (
    <Container>
      <PhotoImg src={backimg1_1}></PhotoImg>
      <PhotoImg src={backimg1_2}></PhotoImg>
      <PhotoImg src={backimg1_3}></PhotoImg>
      <PhotoImg src={backimg1_4}></PhotoImg>
      <PhotoImg src={backimg2_1}></PhotoImg>
      <PhotoImg src={backimg3_1}></PhotoImg>
      <PhotoImg src={backimg3_2}></PhotoImg>
      <PhotoImg src={backimg4_1}></PhotoImg>
      <PhotoImg src={backimg4_2}></PhotoImg>
      <PhotoImg src={backimg4_3}></PhotoImg>
      <PhotoImg src={backimg4_4}></PhotoImg>
      <PhotoImg src={backimg4_5}></PhotoImg>
      <PhotoImg src={backimg4_6}></PhotoImg>
      <PhotoImg src={backimg4_7}></PhotoImg>
      <PhotoImg src={backimg5_1}></PhotoImg>
      <PhotoImg src={backimg5_2}></PhotoImg>
      <PhotoImg src={backimg5_3}></PhotoImg>
      <PhotoImg src={backimg5_4}></PhotoImg>
      <PhotoImg src={backimg5_5}></PhotoImg>
    </Container>
  );
}
