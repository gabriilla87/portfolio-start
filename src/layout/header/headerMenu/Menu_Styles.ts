import styled, {css} from "styled-components";

// Menu

const Link = styled.a`
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
`

const MenuItem = styled.li`
    
`

// Mobile Menu

const MobileMenu = styled.nav`

`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    width: 24px;
    height: 24px;
    padding: 0 2px;
    z-index: 999999;

    span {
        display: block;
        width: 20px;
        height: 2px;
        background-color: #000;

        position: relative;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background-color: #000;

            position: absolute;
            transform: translateY(-4px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background-color: #000;

            position: absolute;
            transform: translateY(4px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg);
            `}
`

// Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;
    }
`

export const S = {
    Link,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}