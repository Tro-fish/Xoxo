import React, {useState} from "react";
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { colors } from '../../colors';
import EventPage01 from "./eventPage01";
import EventPage02 from "./eventPage02";
import EventPage03 from "./eventPage03";



const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 60vw;
    margin-top: 10vh;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    margin-top: 2vh;
    font-size: ${colors.content};
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.title};
    font-weight: 900;
`;

const BtnBox = styled.div`
    display: flex;
    width: 15vw;
    justify-content: space-between;
    margin-top: 5vw;
    margin-bottom: 10vw;
`;

const Btn = styled.button`
    border: 0px;
    background-color: white;
    cursor: pointer;
`;

const BtnText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.semititle};
    font-weight: 700;
    color: ${colors.darkGray};
`;





export default function Event() {
    const [Page, setPage] = useState(1)
    const onIncrease = () => {
        setPage(Page + 1);
        if (Page >= 3) {
            setPage(3);
        }
    }
    const onDecrease = () => {
        setPage(Page - 1);
        if (Page <= 1) {
            setPage(1);
        }
    }
    const onOne = () => {
        setPage(1);
    }
    const onTwo = () => {
        setPage(2);
    }
    const onThree = () => {
        setPage(3);
    }
    
    const EventPage = () => {
        if (Page === 1) {
            return <EventPage01/>
        } else if(Page === 2){
            return <EventPage02/>
        } else if (Page === 3) {
            return <EventPage03/>
        }
    }

    return (
        <Container>
            <TextBox >
                <Text1 >01.</Text1>
                <BText style={{ marginTop: "5vw" }}>라이푸 이벤트</BText>
            </TextBox>

            <EventPage/>
            
            <BtnBox>
                <Btn onClick={onDecrease}>
                    <FiChevronLeft
                        style={{
                            fontSize: `${colors.title}`,
                            fontWeight: "700",
                            marginTop: "1vh",
                            color: `${colors.darkGray}`
                        }} />
                </Btn>
                <Btn onClick={onOne}><BtnText style={{color: Page===1 ? "black":`${colors.darkGray}`}}>1</BtnText></Btn>
                <Btn onClick={onTwo}><BtnText style={{color: Page===2 ? "black":`${colors.darkGray}`}}>2</BtnText></Btn>
                <Btn onClick={onThree}><BtnText style={{color: Page===3 ? "black":`${colors.darkGray}`}}>3</BtnText></Btn>
                <Btn onClick={onIncrease}>
                    <FiChevronRight
                        style={{
                            fontSize: `${colors.title}`,
                            fontWeight: "700",
                            marginTop: "1vh",
                            color: `${colors.darkGray}`
                        }} />
                </Btn>
            </BtnBox>
        </Container>
    );
}