import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Skills</SectionTitle>
                    <FlexWrapper justify={"space-between"} padding={"10px"} margin={"74px 0 0"}>
                        <Icon iconId={"vscode"} width="112" height="112" viewBox="0 0 112 112"/>
                        <Icon iconId={"javascript"} width="121" height="120" viewBox="0 0 121 120"/>
                        <Icon iconId={"css"} width="121" height="119" viewBox="0 0 121 119"/>
                        <Icon iconId={"html"} width="121" height="120" viewBox="0 0 121 120"/>
                        <Icon iconId={"greensock"} width="121" height="120" viewBox="0 0 121 120"/>
                        <Icon iconId={"vector"} width="105" height="100" viewBox="0 0 105 100"/>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"}  padding={"10px"} margin={"74px 0 0"}>
                        <Icon iconId={"github"} width="88" height="88" viewBox="0 0 88 88"/>
                        <Icon iconId={"git"} width="106" height="105" viewBox="0 0 106 105"/>
                        <Icon iconId={"react"} width="114" height="101" viewBox="0 0 114 101"/>
                        <Icon iconId={"sass"} width="118" height="87" viewBox="0 0 118 87"/>
                        <Icon iconId={"bootstrap"} width="89" height="87" viewBox="0 0 89 87"/>
                        <Icon iconId={"tailwind"} width="131" height="131" viewBox="0 0 131 131"/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`
