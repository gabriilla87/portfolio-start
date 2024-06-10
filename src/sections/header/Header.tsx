import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";

export const Header = () => {
    return (
        <StyledHeader>
            <Icon iconId={"brandLogo"}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    
`