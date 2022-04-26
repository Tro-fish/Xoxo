import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import backimg from "../image/4.jpg";
import Google from "../image/Google-Play.png";
import Apple from "../image/Apple_Store.png";
import { BrowserView, MobileView } from 'react-device-detect';

const Container = styled.div`
    background-image: url(${backimg});
    background-size: cover;
    display: flex;
    margin-top: 5vh;
    width: 100%;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 45vh 0vw;
    margin-left: 13vw;
`;

const Text1 = styled.text`
    font-family: "Pretendard";
    font-size: 2vh;
    font-weight: 600;
    color: white;
    margin-bottom: 7px;
    
`;

const Text2 = styled.text`
    font-family: "Pretendard";
    color: white;
    font-weight: 800;
    font-size: 5vh;
    margin: 5px 0px;
`;

const Text3 = styled.text`
    font-family: "Pretendard";
    color: white;
    font-weight: 1000;
    font-size: 6vh;
    color: ${colors.mint};
    
`;

const BtnBox = styled.div`
    display: flex;
    margin-top: 30px;
`;

const Btn = styled.button`
    background-color: white;
    border: 0px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0vh 3vh;
    margin: 10px;
    margin-left: 0px;
    box-shadow: "0px 3px 5px #B2B2B2";
`;

const Image = styled.img`
    width: 10vh;
`;

export default function Mainpage() {
    const Google_btn = () => {
        alert("곧 플레이스토어에 출시 예정입니다!");
      };
      const Apple_btn = () => {
        alert("곧 앱스토어에 출시 예정입니다!");
    };
    
    return (
        <div>
        <BrowserView>
        <Container>
            <TextBox>
                <Text1>LifeU's with your Life</Text1>
                <Text2><Text3>라이프</Text3> 향상을 위한 어플</Text2>
                <Text2><Text3>라이푸</Text3> 가 함께합니다.</Text2>

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
        </BrowserView>
        <MobileView>
            <h1>모바일 테스트입니다.</h1>
        </MobileView>
        </div>

    );
}