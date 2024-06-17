import React from 'react';
import {Icon} from "../../components/Icon";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

const items = ["About", "Projects", "Contacts"]

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
                    <Icon iconId={"brandLogo"} width="189" height="20" viewBox="0 0 189 20"/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

