import styled, {keyframes} from 'styled-components'

const marker_animation = keyframes`
    0% {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        fill: rgba(0,0,0,0);
        stroke: #ED6A5A;
        transform: rotate3d(0,1,0,0deg);
    }

    40% {
        stroke-dashoffset: 0;
        fill: rgba(0,0,0,0);
        stroke: #ED6A5A;
        transform: rotate3d(0,1,0,0deg);
    }

    60% {
        fill: #05A8AA;
        stroke: #05A8AA;
    }

    70% {
        transform: rotate3d(0,1,0,0deg);
        fill: #05A8AA;
        stroke: #05A8AA;
    }

    90% {
        transform: rotate3d(0,1,0,180deg);
        stroke-dashoffset: 0;
        fill: #05A8AA;
        stroke: #05A8AA;
    }

    100% {
        transform: rotate3d(0,1,0,180deg);
        fill: #05A8AA;
        stroke: #05A8AA;
    }

`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* width: 100%; */
    z-index: 1100;

    svg {
        width: 100px;
        padding-top: 10px;
    }
`

export const MarkerSvg = styled.svg`
    fill: #ED6A5A;
    stroke: #ED6A5A;
    stroke: black;
    stroke-width: 7px;
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    transform: rotate3d(0,1,0,0deg);
    animation: ${marker_animation} 1.5s linear infinite;
`


