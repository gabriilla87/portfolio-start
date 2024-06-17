import styled from "styled-components";

type ContainerPropsType = {
    width?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.width || "1230px"};
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    //outline: 1px solid green;
`