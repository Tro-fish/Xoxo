import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';


const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 60vw;
    margin-top: 10vh;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60vw;
`;

const QnABox1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    border-bottom: 2px solid ${colors.gray};
`;

const QnABox2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    margin-top: 2vh;
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: 35px;
    font-weight: 900;
`;

const Text2 = styled.text`
    font-family: "pretendard";
    font-weight: 900;
    color: black;
    margin-right: 1vw;
`;

const Text3 = styled.text`
    font-family: "pretendard";
    color: ${colors.darkGray};
    margin: 2vh 0vw;
    margin-right: 1vw;
`;

const Text4 = styled.text`
    font-family: "pretendard";
    font-weight: 900;
    color: ${colors.mint};
    margin-right: 1vw;
`;
const BtnBox = styled.div`
    display: flex;
    width: 60vw;
    justify-content: flex-end;
`;
const Btn = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 20px;
    background-color: ${colors.mint};
    border: 0px;
    margin: 5vh 0vw;
`;

const A = styled.a`
    text-decoration: none;
`;



export default function Main02() {
    
    return (
        <Container>
            <TextBox >
                <Text1 >03.</Text1>
                <BText style={{ marginTop: "10vh" }}>쏘쏘마켓 궁금해요!</BText>
            </TextBox>
            <TextBox>
                <QnABox1>
                    <Text3>01.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>쏘쏘마켓은 어떤 어플리케이션 인가요?</Text1>
                        <Text3 style={{marginBottom:"0vh"}}><Text2>A</Text2>소비자와 소비자 간의 거래라는 의미입니다. 심부름, 소일거리 등 지역내 서비스 플랫폼입니다.</Text3>
                        <Text3 style={{marginLeft:"2vw"}}>나의 근처에서 도움이 필요할 때 언제든 사용 할 수 있는 편리한 애플리케이션 입니다.</Text3>
                    </ContentBox>
                </QnABox1>
                <QnABox1>
                    <Text3>02.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>쏘쏘페이가 지불이 안된 것 같아요 언제 지불 되나요?</Text1>
                        <Text3><Text2>A</Text2>쏘쏘페이 인출 신청 후 하루 뒤에 이체됩니다. 그때 인출 가능하십니다.</Text3>
                    </ContentBox>
                </QnABox1>
                <QnABox1>
                    <Text3>03.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>계좌 연결 개수 제한이 되어 있나요?</Text1>
                        <Text3><Text2>A</Text2>계좌는 본인 명의 계좌 한가지만 연결 가능하세요!</Text3>
                    </ContentBox>
                </QnABox1>
                <QnABox1>
                    <Text3>04.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>쏘쏘페이 충전 제한 금액은 따로 있나요?</Text1>
                       <Text3><Text2>A</Text2>아니요. 제한 금액은 없습니다. 많은 충전과 이용 부탁드려요!</Text3>   
                    </ContentBox>
                </QnABox1>
                <QnABox2>
                    <Text3>04.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>쏘쏘페이 충전 제한 금액은 따로 있나요?</Text1>
                        <Text3><Text2>A</Text2>아니요. 제한 금액은 없습니다. 많은 충전과 이용 부탁드려요!</Text3>
                    </ContentBox>
                </QnABox2>
                <BtnBox>
                    <A href="./faq01.js" rel="noopener noreferrer"><Btn><Text1 style={{fontWeigt:"800"}}>더보기</Text1></Btn></A>
                </BtnBox>
            </TextBox>
            
        </Container>
    );
}