import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import backimg from "../image/회사소개.png";

const Container = styled.div`
    background-image: url(${backimg});
    background-size: 100%;
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
    margin: 35vh 0vw;
    margin-left: 20vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    color: white;
    font-weight: 900;
    font-size: ${colors.semititle};
    margin-bottom: 5vh;
`;

const Text2 = styled.text`
    font-family: "pretendard";
    font-size: 1.5vw;
    font-weight: 600;
    color: white;
    margin-bottom: 2.5vh;
`;

const Text3 = styled.text`
    font-family: "pretendard";
    font-size: 1.5vw;
    font-weight: 800;
    color: white;
    margin-bottom: 2.5vh;
`;

export default function Mainpage() {
    
    return (
        <Container>
            <TextBox>
                <Text1>삶을 한 층 더 쉽게</Text1>
                <Text2>요즘 세상, 너무나도 <Text3>바쁜 일상</Text3>들을 살아가는 모든이들에게,</Text2>
                <Text2>여러 살림적인 부분, 일적인 부분 등  <Text3 style={{color:`${colors.mint}`}}>라이프</Text3> 의 향상을</Text2>
                <Text2>어플 하나로 해결할 수 있는 공간을 <Text3 style={{color:`${colors.mint}`}}>라이푸</Text3>가 제공해드리겠습니다.</Text2>
            </TextBox>
        </Container>

    );
}