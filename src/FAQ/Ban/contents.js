import React, {useState} from "react";
import styled from 'styled-components';
import { colors } from '../../colors';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import QnA01 from "./QnA01";
import QnA02 from "./QnA02";
import QnA03 from "./QnA03"


const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const IndexBox = styled.div`
    display: flex;
    width: 60vw;
    margin-top: 15vh;
    padding: 15px 0px;
    border-bottom: 2px solid ${colors.mint};
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: 4vh;
    font-weight: 900;
    color: ${colors.darkGray};
    margin-right: 20px;
`;

const BtnBox = styled.div`
    display: flex;
    width: 20vw;
    justify-content: space-between;
    margin-top: 10vh;
    margin-bottom: 40vh;
`;

const Btn = styled.button`
    border: 0px;
    background-color: white;
`;

const BtnText = styled.text`
    font-family: "pretendard";
    font-size: 2vw;
    font-weight: 700;
    color: ${colors.darkGray};
`;

const A = styled.a`
    text-decoration: none;
`;

export default function Main02() {
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
    
    const QnA = () => {
        if (Page === 1) {
            return <QnA01/>
        } else if(Page === 2){
            return <QnA02/>
        } else if (Page === 3) {
            return <QnA03/>
        }
    }

    return (
        <Container>
            <IndexBox>
                <A href="./faq01.js" rel="noopener noreferrer"><BText >전체</BText></A>
                <A href="./faq02.js" rel="noopener noreferrer"><BText style={{color:"black"}}>이용제제</BText></A>
                <A href="./faq03.js" rel="noopener noreferrer"><BText>기타질문</BText></A>
                <A href="./faq04.js" rel="noopener noreferrer"><BText>기타질문</BText></A>
            </IndexBox>
            
            <QnA />

            <BtnBox>
                <Btn onClick={onDecrease}>
                    <FiChevronLeft
                        style={{
                            fontSize: "2vw",
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
                            fontSize: "2vw",
                            fontWeight: "700",
                            marginTop: "1vh",
                            color: `${colors.darkGray}`
                        }} />
                </Btn>
            </BtnBox>
        </Container>
    );
}