import React from 'react';
import {Icon} from "../../components/Icon";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";
import {Logo} from "../../components/Logo";

export const menuItems = [
    {
        id: 1,
        name: "About",
        href: "mainSection",
    },

    {
        id: 2,
        name: "Skills",
        href: "skillsSection",
    },

    {
        id: 3,
        name: "Projects",
        href: "projectsSection",
    },

    {
        id: 4,
        name: "Contacts",
        href: "contactsSection",
    }

]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 786;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu/>
                                        : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

