import React from 'react';
import {Icon} from "./Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <Link onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"brandLogo"} width="189" height="20" viewBox="0 0 189 20"/>
        </Link>
    );
};

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`