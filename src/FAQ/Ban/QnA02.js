import React from "react";
import styled from 'styled-components';
import { colors } from '../../colors';


const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 60vw;
    margin-top: 8vh;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60vw;
`;

const QnABox1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    border-bottom: 2px solid ${colors.gray};
`;

const QnABox2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
`;

const Text1 = styled.text`
    font-family: "pretendard";
    margin-top: 2vh;
`;

const Text2 = styled.text`
    font-family: "pretendard";
    font-weight: 900;
    color: black;
    margin-right: 1vw;
`;

const Text3 = styled.text`
    font-family: "pretendard";
    color: ${colors.darkGray};
    margin: 2vh 0vw;
    margin-right: 1vw;
`;

const Text4 = styled.text`
    font-family: "pretendard";
    font-weight: 900;
    color: ${colors.mint};
    margin-right: 1vw;
`;






export default function QnA01() {
    
    return (
            <TextBox>
                <QnABox1>
                    <Text3>01.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>쏘쏘마켓은 어떤 어플리케이션 인가요?</Text1>
                        <Text3><Text2>A</Text2>실시간 모니터링으로 늘 확인 중에 있습니다! 빠른조치 해드릴께요!</Text3>
                    </ContentBox>
                </QnABox1>
                <QnABox1>
                    <Text3>02.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>이용정지가 되었어요! 이용정지 기준이 어떻게 되나요?</Text1>
                        <Text3><Text2>A</Text2>확인후 쏘쏘마켓으로 언제든 문의 주세요!</Text3>
                    </ContentBox>
                </QnABox1>
                <QnABox1>
                    <Text3>03.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>채팅으로 모욕감을 받았어요! 신고 가능한가요?</Text1>
                        <Text3 style={{marginBottom:"0vh"}}><Text2>A</Text2>네! 가능하십니다. 캡처 후에 신고하기에 신고를 해주시면 저희가 확인후 빠른 조치 해드리도록 하겠습니다!</Text3>
                        <Text3 style={{marginLeft:"2vw"}}>( 상대방에게 불쾌감을 주는 글은 언제나 삼가해주세요 )</Text3>
                    </ContentBox>
                </QnABox1>
                <QnABox1>
                    <Text3>04.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>주니어 마크는 무엇인가요?</Text1>
                       <Text3><Text2>A</Text2>신분증 미 인증 시 주니어 마크가 부여됩니다! 주니어 마크 이용자와의 거래는 이용 약관에 더욱 유의 해주세요!</Text3>   
                    </ContentBox>
                </QnABox1>
                <QnABox2>
                    <Text3>05.</Text3>
                    <ContentBox>
                        <Text1><Text4>Q</Text4>약 심부름도 가능한가요?</Text1>
                        <Text3><Text2>A</Text2>처방받지 않은 약은 불가능 합니다!</Text3>
                    </ContentBox>
                </QnABox2>
            </TextBox>
    );
}