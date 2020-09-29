import styled from 'styled-components'

export const HomeGrid = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 2rem;
    }
`;

export const MyTextInput = styled.div`
    margin: 5px 0px 20px 0px;
    width: 100%;

    & .MuiInput-underline:before {
        border-bottom: ${({theme}) => `1px solid ${theme.inputUnderlineColor}`}
    }

    & .MuiFormLabel-root {
        color: ${({theme}) => theme.inputLabel};
    }

    & .MuiFormHelperText-root {
        color: ${({theme}) => theme.inputLabel}
    }

    & .MuiTypography-colorTextSecondary {
        color: ${({theme}) => theme.inputLabel}
    }

    & .MuiInputBase-input {
        color: ${({theme}) => theme.inputLabel}
    }
    
    & .Mui-focused {
        color: ${({theme}) => theme.selectedInputColor}
    }
    & .Mui-focused * {
        color: ${({theme}) => theme.selectedInputColor}
    }
    & label.Mui-focused {
        color: ${({theme}) => theme.selectedInputColor}
    }
    & .MuiInput-underline:after {
        border-bottom-color: ${({theme}) => theme.selectedInputColor}
    }
`;

export const CardForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15%;
    margin-top: 80px;
`;

export const MyButton = styled.div`
    margin-top: 60px;
    background-color: ${({theme}) => theme.buttonColor};
    border-radius: 10px;
    & * {color: white;}
`;

export const ThemeButtonStyle = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    border: 1px solid red;
`