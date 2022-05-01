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
        background-color: ${colors.lightGray};
        padding: 18px 0px;
        align-items: center;
        justify-content: center;
    }
    ${media.desktop}{
        display: none;
    }
`;

const Logo = styled.img`
    ${media.phone}{
        width: 22vw;
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
        margin-right: 2vw;
    }
    ${media.desktop}{
        display: none;
    }
`;
const Text1 = styled.text`
    ${media.phone}{
        font-family: 'jalnan';
        font-size: 3vw;
        color: black;
        font-weight: 400;
    }
    ${media.desktop}{
        display: none;
    }
`;

const Text2 = styled.text`
    ${media.phone}{
        font-family: 'jalnan';
        font-size: 7vw;
        font-weight: 900;
        color: black;
    }
    ${media.desktop}{
        display: none;
    }
`;

const Download = styled.button`
    ${media.phone}{
        background-color: white;
        border: 1px solid ${colors.mint};
        border-radius: 15px;
        cursor: pointer;
        padding: 10px 15px;
    }
    ${media.desktop}{
        display: none;
    }
`;

const BtnText = styled.text`
    ${media.phone}{
        font-family: "pretendard";
        font-size: 20px;
        font-weight: 900;
        color: black;
    }
    ${media.desktop}{
        display: none;
    }
`;

const X = styled.button`
    ${media.phone}{
        background-color: ${colors.lightGray};
        border: 0px;
        border-radius: 10px;
        cursor: pointer;
        margin-right: 3vw;
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
                <X onClick={onClick}><BtnText style={{color:"black"}}>x</BtnText></X>
                <Logo src={logo} />
                <TextBox>
                    <Text1>삶을 한 층 더 쉽게</Text1>
                    <Text2>라이푸마켓</Text2>
                </TextBox>
                <Download onClick={appDown}>
                    <BtnText>다운로드</BtnText>
                </Download>
            </Container>
            :
            null
    );
}