import YellowBg from "../../../assets/img/yellow-bg.svg";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    //background-color: #ffff95;
    z-index: 0;
    padding-top: 44px;
`

const TextWrapper = styled.div`
    display: flex;
    //flex:1;
    min-width: 500px;
    flex-direction: column;
    padding-right: 92px;
    z-index: 2;

    //outline: 1px solid darkblue;
`

const TextContainer = styled.div`
    max-width: 508px;
    min-width: 345px;
`

const Profession = styled.h1`
    margin-bottom: 12px;
    color: ${theme.colors.accent};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
`

const Name = styled.h2`
    ${font({family: `"Roboto", sans-serif`, weight: 700, lineHeight: "120%", Fmin: 42, Fmax: 64})}}
`

const Text = styled.p`
    margin: 32px 0;

    color: #828282;
    
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
`

const PictureWrapper = styled.div`
    //flex: 1;
    height: 573px;
    min-width: 500px;
    
    //outline: 1px solid red;
    position: relative;
    // mask-image: url(${YellowBg});
    // mask-repeat: no-repeat;
    // mask-position: center;
    // mask-size: cover;
    
    img {
        position: absolute;
        right: -120px;
        bottom: 0;
        z-index: 2;
        overflow-x: hidden;

    }
    
    &::after {
        content: url(${YellowBg});
        
        position: absolute;
        right: -120px;
        bottom: 0;
        z-index: 1;
        overflow-x: hidden;
    }
`

export const S = {
    Main,
    TextWrapper,
    TextContainer,
    Profession,
    Name,
    Text,
    PictureWrapper,
}