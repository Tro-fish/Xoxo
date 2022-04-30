import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import backimg from "../image/event01.jpg";
import { IoShareOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

const media = {
    phone : '@media(max-width: 1000px)'
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin-top: 8vh;

    ${media.phone}{
        width: 85vw;
    }
`;

const TextBox = styled.div`
    display: flex;
    width: 55vw;
    flex-direction: column;
    margin-top: 5vw;
    margin-bottom: 5vw;

    ${media.phone}{
        width: 95%;
    }
`;

const Text1 = styled.text`
    font-family: "pretendard";
    font-size: ${colors.content};

    ${media.phone}{
        font-size: 10px;
    }
`;

const Text2 = styled.text`
    font-family: "pretendard";
    font-size: 1.6vw;
    font-weight: 700;
    color: black;
    margin: 0vw 2vw;

    ${media.phone}{
        font-size: 17px;
        margin-left: 20px;
    }
    
`;

const BText = styled.text`
    font-family: "pretendard-black";
    font-size: ${colors.title};
    font-weight: 900;
    margin-top: 2vw;

    ${media.phone}{
        font-family: "pretendard-black";
        font-size: 25px;
        font-weight: 900;
    }
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
    ${media.phone}{
        flex-direction: column;
        align-items: flex-end;
    }
`;

const Btn = styled.button`
    cursor: pointer;
    border: 0px;
    background-color: white;
    display: flex;
    align-items: center;

    ${media.phone}{
        margin-top: 10px;
    }
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
                            fontSize: media.phone? "20px":`${colors.semititle}`,
                        }}
                    />
                    <Text2 style={{marginRight: media.phone? "3vw":"0vw"}}>좋아요</Text2>
                </Btn>
                <Btn>
                    <IoShareOutline
                        style={{
                            fontSize: media.phone? "20px":`${colors.semititle}`,
                        }}
                    />
                    <Text2 style={{marginRight: "0vw"}}>공유하기</Text2>
                </Btn>
            </Box>
        </Container>
    );
}