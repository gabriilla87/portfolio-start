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
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        height: 24vw;
        max-height: 350px;
        background-image: url(${footerImg});
        background-repeat: no-repeat;
        background-size: 100%;
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