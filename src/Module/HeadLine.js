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
    width: 10vw;
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
            <A href="./Mainpage.js" rel="noopener noreferrer">
                <LogoBtn>
                    <Logo src={logo}/>
                </LogoBtn>
            </A>
            <Box1>
                <A href="./coIntro.js" rel="noopener noreferrer"><Text>회사소개</Text></A>
                <A href="./mainpage.js" rel="noopener noreferrer"><Text>앱</Text></A>
                <A href="./xoxoNews01.js" rel="noopener noreferrer"><Text>쏘쏘뉴스</Text></A>
                <A href="./faq01.js" rel="noopener noreferrer"><Text>FAQ</Text></A>
            </Box1>
        </Container>
    );
}