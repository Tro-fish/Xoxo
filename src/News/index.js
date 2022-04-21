import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';


const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
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

export default function Index() {

    return (
        <Container>
            <IndexBox>
                <BText style={{color:"black"}}>전체</BText>
                <BText>이용제제</BText>
                <BText>기타질문</BText>
                <BText>기타질문</BText>
            </IndexBox>
        </Container>
    );
}