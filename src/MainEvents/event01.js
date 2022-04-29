import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import backimg from "../image/event01.jpg";
import { IoShareOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin-top: 8vh;
`;

const TextBox = styled.div`
    display: flex;
    width: 55vw;
    flex-direction: column;
    margin-top: 5vw;
    margin-bottom: 5vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    font-size: ${colors.content};
`;

const Text2 = styled.text`
    font-family: "pretendard";
    font-size: 1.6vw;
    font-weight: 700;
    color: ${colors.darkGray};
    margin: 0vw 2vw;
`;

const BText = styled.text`
    font-family: "pretendard-black";
    font-size: ${colors.title};
    font-weight: 900;
    margin-top: 2vw;
`;

const EventImg = styled.img`
    width: 100%;
`;

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2vw;
`;

const Btn = styled.button`
    cursor: pointer;
    border: 0px;
    background-color: white;
    display: flex;
    align-items: center;
`;

export default function QnA01() {
    
    return (
        <Container>
            <TextBox>
                <Text1>01.</Text1>
                <BText>친구 초대 이벤트</BText>
            </TextBox>
            <EventImg src={backimg}></EventImg>
            <Box>
                <Btn>
                    <FiHeart
                        style={{
                            color: `${colors.mint}`,
                            fontSize: `${colors.semititle}`,
                        }}
                    />
                    <Text2>좋아요</Text2>
                </Btn>
                <Btn>
                    <IoShareOutline
                        style={{
                            fontSize: `${colors.semititle}`,
                        }}
                    />
                    <Text2 style={{marginRight: "0vw"}}>공유하기</Text2>
                </Btn>
            </Box>
        </Container>
    );
}