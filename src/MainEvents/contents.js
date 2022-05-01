import React, {useState} from "react";
import styled from 'styled-components';
import { colors } from '../colors';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Event01 from "./event01";
import Event02 from "./event02";
import Event03 from "./event03"

const media = {
    desktop: '@media(min-width: 501px)',
    phone : '@media(max-width: 500px)'
};

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const BtnBox = styled.div`
    display: flex;
    width: 20vw;
    justify-content: space-between;
    margin-top: 5vw;
    margin-bottom: 10vw;
    ${media.phone}{
        margin-top: 50px;
        width: 200px;
        margin-bottom: 100px;
    }

    .left{
        font-size:${colors.semititle};
        font-weight: 700;
        color: ${ colors.darkGray };
        ${media.phone}{
            font-size: 20px;
        }
    }

    .right{
        font-size:${colors.semititle};
        font-weight: 700;
        color: ${ colors.darkGray };
        ${media.phone}{
            font-size: 20px;
        }
    }
`;

const Btn = styled.button`
    display: flex;
    border: 0px;
    background-color: white;
    align-items: center;
    cursor: pointer;
`;

const BtnText = styled.text`
    font-family: "pretendard";
    font-size: ${colors.semititle};
    font-weight: 700;
    color: ${colors.darkGray};
    ${media.phone}{
        font-size: 20px;
    }
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
    
    const Events = () => {
        if (Page === 1) {
            return <Event01/>
        } else if(Page === 2){
            return <Event02/>
        } else if (Page === 3) {
            return <Event03/>
        }
    }

    return (
        <Container>
            <Events/>

            <BtnBox>
                <Btn onClick={onDecrease}>
                    <FiChevronLeft className="left" />
                </Btn>
                <Btn onClick={onOne}><BtnText style={{color: Page===1 ? "black":`${colors.darkGray}`}}>1</BtnText></Btn>
                <Btn onClick={onTwo}><BtnText style={{color: Page===2 ? "black":`${colors.darkGray}`}}>2</BtnText></Btn>
                <Btn onClick={onThree}><BtnText style={{color: Page===3 ? "black":`${colors.darkGray}`}}>3</BtnText></Btn>
                <Btn onClick={onIncrease}>
                    <FiChevronRight className="right"/>
                </Btn>
            </BtnBox>
        </Container>
    );
}