import React from 'react'

import {
    Container,
    Title,
    Text,
    Button
} from './styles'

const _404 = () => {

    return (
        <Container>
            
            <Title>404</Title>
            <Text>Página não encontrada</Text>
            <Button to="/">Voltar</Button>

        </Container>
    )

}

export default _404