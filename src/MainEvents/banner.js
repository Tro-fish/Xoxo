import React,{useState} from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import logo from "../image/logo3.png";


const media = {
    desktop: '@media(min-width: 501px)',
    phone : '@media(max-width: 500px)'
};

const Container = styled.div`
    ${media.phone}{
        width: 100%;
        display: flex;
        flex-direction: row;
        position: fixed;
        bottom: 0px;
        background-color: ${colors.mint};
        padding: 20px 0px;
        align-items: center;
        justify-content: center;
    }
    ${media.desktop}{
        display: none;
    }
`;

const Logo = styled.img`
    ${media.phone}{
        width: 15vw;
        border-radius: 15px;
        margin-right: 2vw;
    }
    ${media.desktop}{
        display: none;
    }
`;

const TextBox = styled.div`
    ${media.phone}{
        display: flex;
        flex-direction: column;
        margin-right: 5vw;
    }
    ${media.desktop}{
        display: none;
    }
`;
const Text1 = styled.text`
    ${media.phone}{
        font-family: "pretendard";
        font-size: 3vw;
        color: white;
        font-weight: 400;
    }
    ${media.desktop}{
        display: none;
    }
`;

const Text2 = styled.text`
    ${media.phone}{
        font-family: "pretendard-black";
        font-size: 6vw;
        font-weight: 900;
        color: white;
    }
    ${media.desktop}{
        display: none;
    }
`;

const Download = styled.button`
    ${media.phone}{
        background-color: white;
        border: 0px;
        border-radius: 10px;
        cursor: pointer;
        padding: 1vw 2vw;
    }
    ${media.desktop}{
        display: none;
    }
`;

const BtnText = styled.text`
    ${media.phone}{
        font-family: "pretendard-black";
        font-size: 4vw;
        font-weight: 900;
        color: black;
    }
    ${media.desktop}{
        display: none;
    }
`;

const X = styled.button`
    ${media.phone}{
        background-color: white;
        border: 0px;
        border-radius: 10px;
        cursor: pointer;
        margin-right: 5vw;
    }
    ${media.desktop}{
        display: none;
    }
`;



export default function HeadLine() {
    const [Display, setDisplay] = useState(true);
    const onClick = () => {
        setDisplay(false);
    }
    const appDown = () => {
        alert("곧 앱스토어에 출시 예정입니다!");
    }
    
    return (
        Display ?
            <Container>
                <X onClick={onClick} style={{backgroundColor:`${colors.mint}`}}><BtnText style={{color:"white"}}>x</BtnText></X>
                <Logo src={logo} />
                <TextBox>
                    <Text1>삶을 한 층 더 쉽게</Text1>
                    <Text2>라이푸 마켓</Text2>
                </TextBox>
                <Download onClick={appDown}>
                    <BtnText>다운로드</BtnText>
                </Download>
            </Container>
            :
            null
    );
}