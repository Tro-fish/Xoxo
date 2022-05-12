import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';

const GrayBox = styled.div`
    background-color: gray;
    width: 60vw;
    height: 30vw;
    margin-top: 8vh;
    margin-bottom: 10vw;
`;

const Container = styled.div`
    background-color: ${colors.lightGray};
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
    height: 20vh;
    margin-top: 10vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    font-size: ${colors.content};
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.title};
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