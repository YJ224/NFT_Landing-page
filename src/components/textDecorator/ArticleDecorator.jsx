import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimationEffect = keyframes`
    0% {
    opacity:0;
    }
    50% {
        opacity:0.5;
    }
    75%{
        opacity:0.3;
    }
    100%{
        opacity:1;
    }
`;
const Container = styled.div`
    margin-top: 20px;
    opacity: 0;
    width: ${props => props.width};
    text-align:${props =>props.position};
    font-size: ${props =>props.fontSize}px;
    font-family: ${props =>props.fontFamily};
    color: white;
    line-height: ${props => props.lineHeight}px;
    font-weight:${props=>props.weight};
    animation: ${AnimationEffect} 0.5s ${props => props.delay}s ease 1;
    animation-fill-mode: forwards;
    @media (max-width: 1600px) {
        width: ${props => props.width};
    }
    @media (max-width: 1300px) {
        margin-top: 0px;
    }
    @media (max-height: 800px) {
        margin-top: 5px;
    }
    @media (max-width: 735px) {
        font-size: 12px;
        line-height:16.8px;
    }

`;
export default function ArticleDecorator({ weight,content = "", fontSize = 16, width = 'fit-content', lineHeight = 16, fontFamily = 'Roboto',position='left', height, delay=0.5 }) {
    return (
        <Container weight = {weight} fontSize={fontSize}  fontFamily={fontFamily} width={width} position ={position} lineHeight={lineHeight} height={height} delay={delay}>
            {content}
        </Container>
    )
}