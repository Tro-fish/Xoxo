import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import logo from "../image/xoxo1.png";

const Container = styled.div`
    display: flex;
    position: fixed;
    top:0;
    background-color: white;
    width: 100vw;
    padding: 5px 0px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${colors.gray};
`;

const Logo = styled.img`
    width: 150px;
`;

const Btn = styled.button`
    border: 0px;
    background-color: white;
    font-family: "pretendard";
`;

const LogoBtn = styled.button`
    border: 0px;
    background-color: white;
    margin-left: 10vw;
`;

const Box1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
    width: 30vw;
`;

const Text = styled.text`
    font-weight: 700;
`;

export default function HeadLine() {
    return (
        <Container>
            <LogoBtn>
                <Logo src={logo}/>
            </LogoBtn>
            <Box1>
                <Btn><Text>회사소개</Text></Btn>
                <Btn><Text>앱</Text></Btn>
                <Btn><Text>쏘쏘뉴스</Text></Btn>
                <Btn><Text>FAQ</Text></Btn>
            </Box1>
        </Container>
    );
}