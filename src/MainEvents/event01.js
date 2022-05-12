import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import backimg from "../image/event01.png";
import { IoShareOutline } from "react-icons/io5";

const media = {
  desktop: "@media(min-width: 501px)",
  phone: "@media(max-width: 500px)",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  margin-top: 8vh;

  ${media.phone} {
    width: 90vw;
    margin-top: 13vh;
  }
`;

const TextBox = styled.div`
  display: flex;
  width: 75vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vw;
  margin-bottom: 4vw;

  ${media.phone} {
    flex-direction: column;
    width: 95%;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const Text1 = styled.text`
  font-family: "jalnan";
  font-size: ${colors.title};
  font-weight: 900;
  margin-right: 30px;
  ${media.phone} {
    font-size: 16px;
    margin-right: 9px;
  }
`;

const Text2 = styled.text`
  font-family: "pretendard";
  font-size: 1.6vw;
  font-weight: 700;
  color: black;
  margin-left: 1vw;

  ${media.phone} {
    font-size: 13px;
    margin-left: 10px;
  }
`;

const BText = styled.text`
  ${media.desktop} {
    font-family: "pretendard";
    font-size: ${colors.title};
    font-weight: 900;
  }

  ${media.phone} {
    font-family: "pretendard";
    font-size: 16px;
    font-weight: 900;
  }
`;

const EventImg = styled.img`
  width: 100%;
  ${media.phone} {
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 4vw;
  ${media.phone} {
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 20px;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  ${media.phone} {
    margin-top: 10px;
    margin-left: -10px;
  }
  .share {
    font-size: ${colors.semititle};
    ${media.phone} {
      font-size: 20px;
    }
  }
`;

export default function QnA01() {
  return (
    <Container>
      <TextBox>
        <BText>
          <Text1>01.</Text1>
          <BText style={{ color: "#FF0000" }}>[OPEN EVENT]</BText> 아메리카노가
          무료라고 ?!{" "}
        </BText>
        <Btn>
          <IoShareOutline className="share" />
          <Text2 style={{ marginRight: "0vw" }}>공유하기</Text2>
        </Btn>
      </TextBox>
      <EventImg src={backimg}></EventImg>
    </Container>
  );
}
