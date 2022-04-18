import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';

const GrayBox = styled.div`
    background-color: gray;
    width: 60vw;
    height: 60vh;
    margin-top: 8vh;
`;

const Container = styled.div`
    background-color: ${colors.lightGray};
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 110vh;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 60vw;
    height: 15vh;
`;

const Text1 = styled.text`
    font-family: "pretendard";
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: 35px;
    font-weight: 900;
`;

export default function Main02() {
    
    return (
        <Container>
            <TextBox>
                <Text1>02.</Text1>
                <BText>유저 이용수칙</BText>
            </TextBox>
            <GrayBox></GrayBox>
        </Container>
    );
}