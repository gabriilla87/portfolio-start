import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/Icon";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                    <SectionTitle>Skills</SectionTitle>
                    <S.GridWrapper>
                        <Icon iconId={"vscode"} width="112" height="112" viewBox="0 0 112 112"/>
                        <Icon iconId={"javascript"} width="120" height="120" viewBox="0 0 120 120"/>
                        <Icon iconId={"css"} width="120" height="120" viewBox="0 0 120 120"/>
                        <Icon iconId={"html"} width="120" height="120" viewBox="0 0 120 120"/>
                        <Icon iconId={"greensock"} width="120" height="120" viewBox="0 0 120 120"/>
                        <Icon iconId={"vector"} width="105" height="100" viewBox="0 0 105 100"/>
                        <Icon iconId={"github"} width="88" height="88" viewBox="0 0 88 88"/>
                        <Icon iconId={"git"} width="106" height="105" viewBox="0 0 106 105"/>
                        <Icon iconId={"react"} width="114" height="101" viewBox="0 0 114 101"/>
                        <Icon iconId={"sass"} width="118" height="87" viewBox="0 0 118 87"/>
                        <Icon iconId={"bootstrap"} width="89" height="87" viewBox="0 0 89 87"/>
                        <Icon iconId={"tailwind"} width="120" height="120" viewBox="0 0 120 120"/>
                    </S.GridWrapper>
            </Container>
        </S.Skills>
    );
};

