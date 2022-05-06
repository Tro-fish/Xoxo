import React from "react";
import styled from "styled-components";
import { colors } from "../colors";

const media = {
  phone: "@media(max-width: 500px)",
};

const Container = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 2vw;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10vh;
  ${media.phone} {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5vh;
  margin-bottom: 20vh;
  ${media.phone} {
    margin-top: 30px;
  }
`;

const Text1 = styled.text`
  font-family: "pretendard";
  color: ${colors.darkGray};
  font-size: 0.7vw;
  font-weight: 700;
  margin-right: 5vw;
  ${media.phone} {
    font-size: 13px;
  }
`;

const Text2 = styled.text`
  font-family: "pretendard";
  color: ${colors.darkGray};
  font-size: 0.7vw;
  font-weight: 700;
  ${media.phone} {
    margin: 5px 0px;
    font-size: 13px;
  }
`;

const Text3 = styled.text`
  font-family: "pretendard";
  color: ${colors.darkGray};
  font-size: 0.7vw;
  margin: 10px 0px;
  ${media.phone} {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    margin: 5px 0px;
  }
`;

const Bar = styled.text`
  font-family: "pretendard";
  color: ${colors.darkGray};
  font-size: 11px;
  margin: 0px 10px;
  ${media.phone} {
    display: none;
  }
`;

const A = styled.a`
  text-decoration: none;
  ${media.phone} {
    margin-bottom: 5px;
  }
`;

export default function Info() {
  return (
    <Container>
      <Box>
        <LinkBox>
          <A href="../info" rel="noopener noreferrer">
            <Text1>개인정보 수집 및 이용 동의</Text1>
          </A>
          <A href="../info" rel="noopener noreferrer">
            <Text1>개인정보처리방침</Text1>
          </A>
          <A href="../info" rel="noopener noreferrer">
            <Text1>서비스 이용약관</Text1>
          </A>
          <A href="../info" rel="noopener noreferrer">
            <Text1>위치기반서비스 이용약관</Text1>
          </A>
          <A href="../info" rel="noopener noreferrer">
            <Text1>라이푸마켓 법적 고지</Text1>
          </A>
          <A href="../info" rel="noopener noreferrer">
            <Text1>공지사항</Text1>
          </A>
        </LinkBox>
        <TextBox>
          <Text3>
            <Text2>주식회사 쏘쏘마켓 </Text2>
            <Bar>|</Bar>
            <Text2>대표</Text2> 주희찬
            <Bar>|</Bar>
            <Text2>대표번호</Text2> 02-2067-3083
            <Bar>|</Bar>
            <Text2>제휴문의</Text2> strong@xoxomarket.kr
            <Bar>|</Bar>
            <Text2>고객문의 메일</Text2> cutyyang@xoxomarket.kr
          </Text3>
          <Text3>
            <Text2>사업자등록번호</Text2> 659-86-02648
            <Bar>|</Bar>
            <Text2>통신판매업</Text2> 제 2022-서울금천-2083 호
          </Text3>
          <Text2>
            서울특별시 금천구 가산디지털단지 1로 142 가산더스카이벨리 1차 414호
          </Text2>
        </TextBox>
      </Box>
    </Container>
  );
}
