import React from "react";
import styled from 'styled-components';
import { colors } from '../colors';

const Container = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 2vw;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10vh;
`;

const TextBox = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10vh;
    margin-bottom: 30vh;
`;


const Text1 = styled.text`
    font-family: "pretendard";
    color: ${colors.darkGray};
    font-size: 0.5vw;
    font-weight: 700;
    margin-right: 5vw;
`;

const Text2 = styled.text`
    font-family: "pretendard";
    color: ${colors.darkGray};
    font-size: 0.5vw;
    font-weight: 700;
`;

const Text3 = styled.text`
    font-family: "pretendard";
    color: ${colors.darkGray};
    font-size: 0.5vw;
    margin: 10px 0px;
`;

const Bar = styled.text`
    font-family: "pretendard";
    color: ${colors.darkGray};
    font-size: 0.5vw;
    margin: 0px 10px;
`;

const A = styled.a`
    text-decoration: none;
`;

export default function Info() {
    return (
        <Container>
            <Box>
                <LinkBox>
                    <A href="../info" rel="noopener noreferrer"><Text1>개인정보 수집 및 이용 동의</Text1></A>
                    <A href="../info" rel="noopener noreferrer"><Text1>개인정보처리방침</Text1></A>
                    <A href="../info" rel="noopener noreferrer"><Text1>서비스 이용약관</Text1></A>
                    <A href="../info" rel="noopener noreferrer"><Text1>위치기반서비스 이용약관</Text1></A>
                    <A href="../info" rel="noopener noreferrer"><Text1>공지사항</Text1></A>
                </LinkBox>
                <TextBox>
                    <Text3>
                        <Text2>쏘쏘마켓 </Text2>Xoxo
                        <Bar>|</Bar>
                        <Text2>대표</Text2> 주희찬
                        <Bar>|</Bar>
                        <Text2>대표번호</Text2> 02-2067-3083
                        <Bar>|</Bar>
                        <Text2>제휴문의</Text2> strong@xoxomarket.kr
                        <Bar>|</Bar>
                        <Text2>고객문의 메일</Text2> cutyyang@xoxomarket.kr
                    </Text3>
                    <Text3>
                        <Text2>사업자등록번호</Text2> 659-86-02648
                        <Bar>|</Bar>
                        <Text2>통신판매업</Text2> 00000000000000
                    </Text3>
                    <Text3>
                        서울특별시 금천구 가산디지털단지 1로 142 가산더스카이벨리 1차 414호
                    </Text3>
                </TextBox>
            </Box>
        </Container>

    );
}