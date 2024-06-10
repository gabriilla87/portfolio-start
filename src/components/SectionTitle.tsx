import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.span`
    text-align: center;
    display: inline-block;
    position: relative;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
    
    &::before {
        content: "";
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
    }
`