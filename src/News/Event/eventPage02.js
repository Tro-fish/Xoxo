import React from "react";
import styled from 'styled-components';
import { colors } from '../../colors';
import backimg from "../../image/이벤트배너-01.png";
import backimg01 from "../../image/이벤트배너-02.png";


const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    width: 60vw;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    margin-top: 8vh;
`;

const Image = styled.button`
    background-size: 35vw;
    background-position: center center;
    display: flex;
    width: 45vw;
    height: 15vw;
    border-radius: 20px;
    cursor: pointer;
    border: 0px;
`;






export default function EventPage01() {
    const onClick = (e) => {
        window.location.href = '/events';
    };
    return (
        <ContentBox>
            <Box>
                <Image onClick={onClick}style={{ backgroundImage: `url(${backimg})`, marginRight: "5vw" }} />
                <Image style={{ backgroundImage: `url(${backimg01})`, border:`0.15vw solid ${colors.gray}` }} />
            </Box>
            <Box>
                <Image style={{ backgroundImage: `url(${backimg})`, marginRight: "5vw"}} />
                <Image style={{ backgroundImage: `url(${backimg01})`, border:`0.15vw solid ${colors.gray}` }} />
            </Box>
        </ContentBox>
    );
}