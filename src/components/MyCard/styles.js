import styled from 'styled-components'

export const CardContent = styled.div`
border-radius: 10px;
width: 100%;
box-shadow: 0px 0px 5px #222;
height: auto;
margin-top: -35px;
padding: 25px;
background-color: ${({theme}) => theme.cardBackground};

@media (max-width: 768px) {
    margin-left: .8rem;
    margin-right: .8rem;
}

`