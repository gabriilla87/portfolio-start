import {createGlobalStyle} from "styled-components";

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
    }
`