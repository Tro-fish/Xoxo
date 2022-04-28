import React from "react";
import styled from 'styled-components';
import { colors } from '../../colors';


const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    width: 60vw;
`;

const Element = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    width: 60vw;
    margin-top: 10vh;
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.semititle};
    font-weight: 900;
    color: black;
    margin-right: 20px;
`;

const Text1 = styled.div`
    font-family: "pretendard";
    font-size: 1.7vw;
    font-weight: 600;
`;

const Text2 = styled.div`
    font-family: "pretendard";
    font-size: ${colors.content};
    margin-top: 10px;
`;

const Image = styled.div`
    width: 25vw;
    height: 15vw;
    border: 1px solid ${colors.gray};
    margin-top: 10px;
`;




export default function EventPage01() {
    
    return (
        <ContentBox>
            <Box>
            <Element>
                <BText>01.</BText>
                <Text1 style={{marginTop:"2vh"}}>심부름 신규 앱</Text1>
                <Text1>탄생한다. 바로 라이푸마켓 ...</Text1>
                <Text2>올 5월 새로운 심부름 앱이 출사표를 던졌다. 어플 라이푸마켓은 ...</Text2>
                <Image></Image>
                </Element>
                <Element>
                <BText>02.</BText>
                <Text1 style={{marginTop:"2vh"}}>라이푸마켓 X ABOUTCOFFEE</Text1>
                <Text2>올 여름 용돈과 커피는 라이푸마켓이 책임진다! 어플 출시기념 이...</Text2>
                <Image></Image>
            </Element>
            </Box>
            <Box>
            <Element>
                <BText>03.</BText>
                <Text1 style={{marginTop:"2vh"}}>발로 뛰는 라이푸마켓,</Text1>
                <Text1>유기견 봉사활동에 감동의 물결...</Text1>
                <Text2>소비자들의 활발한 라이푸활동에 감동한 직원들과 대표 주희찬...</Text2>
                <Image></Image>
                </Element>
                <Element>
                <BText>04.</BText>
                <Text1 style={{marginTop:"2vh"}}>신규 이벤트 오픈하다.</Text1>
                <Text2>어플 라이푸 마켓은 금일(06월 16일)부터 신규이벤트를 오픈했...</Text2>
                <Image></Image>
            </Element>
            </Box>
        </ContentBox>
    );
}