import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledLink} from "../../../components/StyledLink";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper>
                    <TextWrapper>
                        <h1>Software Developer</h1>
                        <h2>Hello,  my name is Vahid Navazan</h2>
                        <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text>
                        <FlexWrapper>
                            <StyledLink>Projects</StyledLink>
                            <StyledLink>Linked in</StyledLink>
                        </FlexWrapper>
                    </TextWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding-top: 55px;
    background-color: #ffff95;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.p`
    
`