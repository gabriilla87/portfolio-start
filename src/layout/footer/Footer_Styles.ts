import styled from "styled-components";
import {theme} from "../../styles/Theme";
import footerImg from "../../assets/img/footerImg.svg";

const Footer = styled.footer`
    padding-bottom: 240px;
    position: relative;
    background-color: ${theme.colors.primary};
    z-index: 0;
    
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-bottom: 32px;
    }
    
    //Нужно как-то растянуть на весь экран
    &::before {
        content: url(${footerImg});
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        z-index: -1;
    }
`

const Link = styled.a`

`

const SocialIconItem = styled.li`
    
`

const Copyright = styled.span`
    color: ${theme.colors.secondaryFont};
    font-size: 16px;
    font-weight: 400;
`

export const S = {
    Footer,
    Link,
    SocialIconItem,
    Copyright,
}