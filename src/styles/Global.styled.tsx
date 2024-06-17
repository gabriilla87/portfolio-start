import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${theme.colors.primaryFont};
    }
    
    section {
        padding-bottom: 144px;
        background-color: ${theme.colors.primary};
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }
    
    body {
        margin: 0;
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        min-width: 360px;
    }
`