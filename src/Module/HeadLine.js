import React,{useState} from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import logo from "../image/logo2.png";
import { FaBars } from "react-icons/fa";


const media = {
    desktop: '@media(min-width: 501px)',
    phone : '@media(max-width: 500px)'
};

const Container = styled.div`
    display: flex;
    position: fixed;
    top:0;
    background-color: white;
    width: 100%;
    padding: 5px 0px;
    align-items: center;
    justify-content: space-between;
    ${media.phone}{
        border-bottom: 1px solid ${colors.darkGray};
    }
    ${media.desktop}{
        border-bottom: 2px solid ${colors.darkGray};
    }
    
    .bars{
        ${media.phone}{
            cursor: pointer;
            margin-right: 5vw;
        }
        ${media.desktop}{
            display: none;
        }
    }
`;

const Logo = styled.img`
    width: 10vw;
    ${media.phone}{
        width: 100px;
    }
`;

const LogoBtn = styled.button`
    border: 0px;
    background-color: white;
    margin-left: 10vw;
    cursor: pointer;
    margin-right: 20vw;
    ${media.phone}{
        margin-left: 3vw;
    }
`;

const Box1 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5vw;
    width: 40vw;
    ${media.phone}{
        display: none;
    }
    ${media.desktop}{
    }
`;

const Text = styled.text`
    font-family:"pretendard";
    color: black;
    font-weight: 700;
    font-size: 1vw;
    ${media.phone}{
        color: white;
        font-size: 4vw;
    }
    ${media.desktop}{
    }
`;

const A = styled.a`
    text-decoration: none;
    margin: 0px 10px;
    ${media.phone}{
        margin-top: 6vh;
    }
    ${media.desktop}{
        margin: 0px 3vw;
    }
`;

const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.9;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function HeadLine() {
    const [Display, setDisplay] = useState(true);
    const onClick = () => {
        setDisplay(!Display);
    }
    const appDown = () => {
        alert("곧 앱스토어에 출시 예정입니다!");
    }

    const goHome = () => {
        window.location.href = "./mainpage";
    }
    
    const PhoneLink = () => {
        return (
            <Black onClick={onClick}>
                    <A href="./coIntro" rel="noopener noreferrer"><Text>회사소개</Text></A>
                    <A href="./mainpage" rel="noopener noreferrer"><Text>앱</Text></A>
                    <A href="./xoxoNews01" rel="noopener noreferrer"><Text>라이푸뉴스</Text></A>
                    <A href="./faq01" rel="noopener noreferrer"><Text>FAQ</Text></A>
            </Black>
        )
    }
    const Link = () => {
        return (
            <Box1>
                <A href="./coIntro" rel="noopener noreferrer" style={{marginTop:0}}><Text>회사소개</Text></A>
                <A href="./mainpage" rel="noopener noreferrer"><Text>앱</Text></A>
                <A href="./xoxoNews01" rel="noopener noreferrer"><Text>라이푸뉴스</Text></A>
                <A href="./faq01" rel="noopener noreferrer"><Text>FAQ</Text></A>
            </Box1>
        )
    }
    return (
        <Container>
                <LogoBtn onClick={goHome}>
                    <Logo src={logo}/>
                </LogoBtn>
                <Link/>
                {Display
                ?
                <FaBars size="24" className="bars" onClick={onClick}></FaBars>
                :
                <PhoneLink/>
                }
        </Container>
    );
}