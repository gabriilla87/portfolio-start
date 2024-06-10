import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string
    align?: string
    wrap?: string
    direction?: string
    // gap?: string
    padding?: string
    margin?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    flex-direction: ${props => props.direction || "row"};
    height: 100%;
    //width: 100%;
    
    padding: ${props => props.padding || "0"};
    margin: ${props => props.margin || "0"};
    outline: 1px solid red;
`