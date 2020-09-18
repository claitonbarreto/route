import React from 'react'

import styled from 'styled-components'


const HeaderContent = styled.div`
    background-color: ${({theme, themeColor, color}) => themeColor === 'light' ? color : theme.cardHeader};
    border-radius: 10px;
    width: 90%;
    text-align: center;
    z-index: 2;

    @media (max-width: 768px) {
        width: 84%;
    }
`;

const Title = styled.h1`
    color: white;
    font-size: 2em;
    padding: .3em 0;
    font-family: 'Raleway', sans-serif;

    @media (max-width: 1440px) {
        font-size: 1.5rem;
    }
`;

const Header = ({title, ...props}) => {
    return(
        <HeaderContent color={props.color} themeColor={props.themeColor}>
            <Title>{title}</Title>
        </HeaderContent>
    )
}

export default Header;