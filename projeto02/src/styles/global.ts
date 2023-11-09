import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px;
    }

    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.baseText};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        line-height: 130%;
        font-weight: 400;
        font-size: 16px;
    }

`
