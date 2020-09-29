import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const MyGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MyButton = styled.div`
    margin-top: 60px;
    background-color: #ED6A5A;
    border-radius: 10px;
    & * {color: white;}
`;

export const BottomGridContainer = styled(Grid)`
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Container = styled(Grid)`
    @media (max-width: 960px) {
        margin-top: 1.5rem;
    }
`