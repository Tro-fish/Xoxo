import React, {useState} from "react";
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { colors } from '../../colors';
import NewsPage01 from "./newsPage01";
import NewsPage02 from "./newsPage02";
import NewsPage03 from "./newsPage03";


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
`;

const Text1 = styled.text`
    font-family: "pretendard";
    margin-top: 2vh;
    font-size: ${colors.content};
`;

const Title = styled.text`
    font-family: "pretendard";
    font-size: ${colors.title};
    font-weight: 900;
`;

const BtnBox = styled.div`
    display: flex;
    width: 15vw;
    justify-content: space-between;
    margin-top: 10vh;
    margin-bottom: 20vh;
`;

const Btn = styled.button`
    border: 0px;
    background-color: white;
`;

const BtnText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.semititle};
    font-weight: 700;
    color: ${colors.darkGray};
`;

const IndexBox = styled.div`
    display: flex;
    width: 60vw;
    margin-top: 5vh;
    padding: 15px 0px;
    border-bottom: 2px solid ${colors.mint};
`;

const BText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.semititle};
    font-weight: 900;
    color: ${colors.darkGray};
    margin-right: 20px;
`;

const A = styled.a`
    text-decoration: none;
`;


export default function Contents() {
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
    
    const NewsPage = () => {
        if (Page === 1) {
            return <NewsPage01/>
        } else if(Page === 2){
            return <NewsPage02/>
        } else if (Page === 3) {
            return <NewsPage03/>
        }
    }

    return (
        <Container>
            <TextBox >
                <Text1 >02.</Text1>
                <Title style={{ marginTop: "10vh" }}>라이푸 뉴스</Title>
            </TextBox>

            <IndexBox>
                <A href="./xoxoNews01.js" rel="noopener noreferrer"><BText style={{color:"black"}}>전체</BText></A>
                <A href="./xoxoNews02.js" rel="noopener noreferrer"><BText>보도이슈</BText></A>
                <A href="./xoxoNews03.js" rel="noopener noreferrer"><BText>라이푸이슈</BText></A>
            </IndexBox>

            <NewsPage/>
            
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