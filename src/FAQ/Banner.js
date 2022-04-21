import React from "react";
import styled from 'styled-components';
import backimg from "../image/3.jpg";

const Container = styled.div`
    background-image: url(${backimg});
    background-size: cover;
    display: flex;
    margin-top: 10vh;
    width: 100vw;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 15vh 0vw;
    margin-left: 20vw;
`;

const Text = styled.text`
    font-family: "pretendard";
    color: black;
    font-weight: 900;
    font-size: 30px;
    margin: 5px 0px;
`;

export default function Mainpage() {
    return (
        <Container>
            <TextBox>
                <Text>자주 묻는 질문</Text>
            </TextBox>
        </Container>

    );
}