import React from 'react';
import {StyledLink} from "../../../components/StyledLink";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./ContactMe_Styles";

export const ContactMe: React.FC = () => {
    return (
        <S.ContactMe id={"contactsSection"}>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Contact Me</SectionTitle>
                    <S.StyledForm>
                        <S.FieldName>Name</S.FieldName>
                        <S.Field/>
                        <S.FieldName>Email</S.FieldName>
                        <S.Field/>
                        <S.FieldName>Message</S.FieldName>
                        <S.Field as={"textarea"}/>
                        <StyledLink as={"button"}>Send</StyledLink>
                    </S.StyledForm>
                </FlexWrapper>
            </Container>
        </S.ContactMe>
    );
};