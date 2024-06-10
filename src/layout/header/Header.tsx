import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

const items = ["About", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Icon iconId={"brandLogo"} width="189" height="20" viewBox="0 0 189 20"/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 12px 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffc9c8;
    //outline: 1px solid red;
`