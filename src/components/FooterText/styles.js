import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0;

    @media (max-width: 768px) {
        padding: 0;
    }
`

export const Text = styled.p`
    text-align: center;
    font-size: 12pt;
    color: ${props => props.color ? props.color : ({theme}) => theme.inputLabel};
    font-weight: 500;
`

export const Destak = styled.a`
    font-weight: 500;
    color: #ED6A5A;
    text-decoration: none;

    :hover {
        text-decoration: none;
        color: #ED6A5A;
    }
`