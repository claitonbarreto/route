import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1`
    font-size: 9rem;
    font-weight: bolder;
    color: ${({theme}) => theme.labelColor};

    @media (max-width: 991px) {
        font-size: 8rem;
    }

    @media (max-width: 479px) {
        font-size: 6.5rem;
    }
`
export const Text = styled.h2`
    font-size: 5rem;
    color: ${({theme}) => theme.labelColor};
    text-align: center;

    @media (max-width: 991px) {
        font-size: 4rem;
    }

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 479px) {
        font-size: 2.5rem;
    }
`
export const Button = styled(Link)`
    padding: .8rem 2rem;
    border-radius: 1rem;

    text-decoration: none;
    font-weight: 300;
    color: #fff;

    background-color: ${({theme}) => theme.buttonColor};

    :hover {
        text-decoration: none;
        color: #fff;
    }
    
`