import React from "react";
import styled from 'styled-components';
import backimg from "../image/이벤트배너-01.png";

const Container = styled.div`
    background-image: url(${backimg});
    background-size: contain;
    background-position: center center;
    display: flex;
    margin-top: 10vh;
    width: 100vw;
    height: 50vh;
    align-items: center;
`;

export default function Mainpage() {
    return (
        <Container>
        </Container>
    );
}