import styled from "styled-components";
import {theme} from "../styles/Theme";

type StyledLinkPropsType = {
    background?: string
    border?: boolean
}

export const StyledLink = styled.a<StyledLinkPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    border-radius: 8px;
    border: ${props => props.border ? "2px" : "0"} solid ${theme.colors.primaryFont};
    background-color: ${props => props.background || theme.colors.accent};
    color: ${theme.colors.primaryFont};

    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
`