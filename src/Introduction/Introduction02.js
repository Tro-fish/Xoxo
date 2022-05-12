import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';

const Container = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin: 20vh 0vw;
    margin-bottom: 40vh;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
`;

const YearBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const YearChart = styled.div`
    display: flex;
    flex-direction: row;

`;

const Text1 = styled.text`
    font-family: "pretendard";
    margin-left: 30px;
    margin-top: 5vh;
    font-size: ${colors.content};
`;

const Text2 = styled.text`
    font-family: "pretendard";
    font-size: ${colors.content};
`;

const BText= styled.text`
    font-family: "pretendard";
    font-size: ${colors.semititle};
    font-weight: 900;
`;

const Vline = styled.div`
    background-color: ${colors.mint};
    width: 0.2vw;
    height: 3vh;
    margin: 1vh 0px;
`;

const Hline = styled.div`
    background-color: ${colors.mint};
    width: 40vw;
    height: 1.5px;
    margin-top: 30px;
`;
export default function Main01() {
    return (
        <Container>
            <ContentBox>
                <Text2>01.</Text2>
                <BText style={{marginTop:"5vw"}}>같이 써 내려가는</BText>
                <BText style={{marginTop:"2vh",marginBottom:"20vh"}}>새로운 발돋움</BText>
                <YearChart>
                    <YearBox>
                        <BText style={{marginBottom:"2vw"}}>2022</BText>
                        <Vline />
                        <Vline />
                        <Vline />
                        <Vline />
                        <Vline />
                        <Vline/>
                        <BText style={{marginTop:"2vw"}}>2023</BText>
                    </YearBox>
                    <TextBox>
                        <Hline />
                        <Text1>04 월 라이푸마켓 베타 버전 서비스 시작</Text1>
                        <Text1>05 월 라이푸마켓 앱 서비스 런칭</Text1>
                        <Hline style={{marginTop:"14vw"}}/>
                        <Text1>라이푸마켓의 미래를 같이 만들어가요 :)</Text1>
                    </TextBox>
                </YearChart>
            </ContentBox>
        </Container>

    );
}