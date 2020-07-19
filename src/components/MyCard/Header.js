import React from 'react'

import styled from 'styled-components'


const HeaderContent = styled.div`
    background-color: ${props => props.color};
    border-radius: 10px;
    width: 60%;
    text-align: center;
    z-index: 2;
`;

const Title = styled.h1`
    color: white;
    font-size: 27pt;
`;

const Header = ({title, ...props}) => {
    return(
        <HeaderContent color={props.color}>
            <Title>{title}</Title>
        </HeaderContent>
    )
}

export default Header;