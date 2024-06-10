import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string
    align?: string
    wrap?: string
    direction?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify || "start"};
    align-items: ${props => props.align || "start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    flex-direction: ${props => props.direction || "row"};
    gap: ${props => props.gap || "0"};
`