import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';

const Container = styled.div`
    background-color: white;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const GrayBox = styled.div`
    background-color: gray;
    width: 25vw;
    height: 25vh;
    border-radius: 10px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10vh 0px;
`;

const TextBox = styled.div`
    display: flex;
    width: 60vw;
    flex-direction: column;
    margin-top: 30vh;
    margin-bottom: 20vh;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: 35px;
    font-weight: 900;
`;

const Text3 = styled.text`
    font-family: "pretendard";
    font-weight: 800;
`;

const Text4 = styled.text`
    font-family: "pretendard";
`;

export default function Main01() {
    return (
        <Container>
            <TextBox>
                <Text1>01.</Text1>
                <Box>
                    <TitleBox>
                        <BText>WE ARE</BText>
                        <BText>XOXO MARKET</BText>
                    </TitleBox>
                    <Text3>이유있는 추천</Text3>
                </Box>
                <Box> 
                    <GrayBox></GrayBox>
                    <ContentBox>
                        <BText>안전하게 거래하는</BText>
                        <Text4>3번의 인증단계를 거친 후 거래사용이 가능합니다.</Text4>
                        <Text4>또한 상대방과 채팅을 통해 충분한 대화 후</Text4>
                        <Text4>거래 약속을 잡을 수 있습니다.</Text4>
                    </ContentBox>
                </Box>
                <Box>
                    <GrayBox></GrayBox>
                    <ContentBox>
                        <BText>손쉽게 이용하는</BText>
                        <Text4>하이퍼로컬 반경 설정을 통해 쉽게 지역을 설정하고</Text4>
                        <Text4>평균 거래 가격을 확인하고 게시물을 설정할 수 있습니다.</Text4>
                    </ContentBox>
                </Box>
                <Box>
                    <GrayBox></GrayBox>
                    <ContentBox>
                        <BText>값싸게 사용하는</BText>
                        <Text4>타앱 대비 저렴한 수수료로 부담없이 사용 가능합니다.</Text4>
                    </ContentBox>
                </Box>
            </TextBox>
        </Container>

    );
}