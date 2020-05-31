import React from 'react'

import styled from 'styled-components'


const HeaderContent = styled.div`
    background-color: #05a8aa;
    border-radius: 10px;
    width: 60%;
    text-align: center;
    z-index: 2;
`;

const Title = styled.h1`
    color: white;
    font-size: 27pt;
    font-weight: 300;
`;

const Header = ({title}) => {
    return(
        <HeaderContent>
            <Title>{title}</Title>
        </HeaderContent>
    )
}

export default Header;