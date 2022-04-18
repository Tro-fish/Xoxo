import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import backimg from "../image/4.jpg";
import Google from "../image/Google-Play.png";
import Apple from "../image/Apple_Store.png";

const Container = styled.div`
    background-image: url(${backimg});
    background-size: cover;
    display: flex;
    margin-top: 10vh;
    width: 100vw;
    height: 94vh;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    font-size: 15px;
    font-weight: 600;
    color: white;
    margin-bottom: 7px;
    
`;

const Text2 = styled.text`
    font-family: "pretendard";
    color: white;
    font-weight: 600;
    font-size: 30px;
    margin: 5px 0px;
`;

const Text3 = styled.text`
    font-family: "pretendard";
    color: white;
    font-weight: 900;
    font-size: 30px;
    color: ${colors.mint};
    
`;

const BtnBox = styled.div`
    display: flex;
    margin-top: 30px;
`;

const Btn = styled.button`
    background-color: white;
    border: 0px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 5vh;
    margin: 10px;
    margin-left: 0px;
    box-shadow: "0px 3px 5px #B2B2B2";
`;

const Image = styled.img`
    width: 7vw;
`;

export default function Mainpage() {
    const Google_btn = () => {
        alert("곧 플레이스토어에 출시 예정입니다!");
      };
      const Apple_btn = () => {
        alert("곧 앱스토어에 출시 예정입니다!");
    };
    
    return (
        <Container>
            <TextBox>
                <Text1>사소한 도움, 어려운 도움 고민하지 말고,</Text1>
                <Text2><Text3>소비자</Text3>와 <Text3>소비자</Text3> 사이에서</Text2>
                <Text2>이루어지는 <Text3>능력거래</Text3></Text2>

                <BtnBox>
                    <Btn onClick={Google_btn}>
                        <Image src={Google}></Image>
                    </Btn>
                    <Btn onClick={Apple_btn}>
                        <Image src={Apple}></Image>
                    </Btn>
                </BtnBox>
            </TextBox>
        </Container>

    );
}