import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    body {
        font-family: 'Roboto', serif;
        background: ${({theme}) => theme.body};
        transition: all .2s ease-in-out;
        max-height: 100vh;
        max-width: 100vw;
    }

    h1,h2,h3,p,label,span, * {font-weight: 100}
`