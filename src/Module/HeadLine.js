import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import logo from "../image/logo2.png";

const Container = styled.div`
    display: flex;
    position: fixed;
    top:0;
    background-color: white;
    width: 100%;
    padding: 5px 0px;
    align-items: center;
    border-bottom: 0.15vw solid ${colors.gray};
`;

const Logo = styled.img`
    width: 10vw;
`;

const LogoBtn = styled.button`
    border: 0px;
    background-color: white;
    margin-left: 10vw;
    cursor: pointer;
    margin-right: 20vw;
`;

const Box1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 3vw;
    width: 50vw;
`;

const Text = styled.text`
    font-family:"pretendard";
    color: black;
    font-weight: 700;
    font-size: 1vw;
`;

const A = styled.a`
    text-decoration: none;
    margin: 0px 10px;
`;

export default function HeadLine() {
    
    return (
        <Container>
            <A href="./Mainpage" rel="noopener noreferrer">
                <LogoBtn>
                    <Logo src={logo}/>
                </LogoBtn>
            </A>
            <Box1>
                <A href="./coIntro" rel="noopener noreferrer"><Text>회사소개</Text></A>
                <A href="./mainpage" rel="noopener noreferrer"><Text>앱</Text></A>
                <A href="./xoxoNews01" rel="noopener noreferrer"><Text>라이푸뉴스</Text></A>
                <A href="./faq01" rel="noopener noreferrer"><Text>FAQ</Text></A>
            </Box1>
        </Container>
    );
}