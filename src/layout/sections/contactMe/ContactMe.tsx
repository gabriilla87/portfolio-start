import React, {ElementRef, useRef} from 'react';
import {StyledLink} from "../../../components/StyledLink";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./ContactMe_Styles";
import emailjs from '@emailjs/browser';

export const ContactMe: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return


        emailjs.sendForm('service_ysc3vki', 'template_w62tcev', form.current, {
                publicKey: 'w4DPDUlE2XjPuMGpA',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.ContactMe id={"contactsSection"}>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Contact Me</SectionTitle>
                    <S.StyledForm ref={form} onSubmit={sendEmail}>
                        <S.FieldName>Name</S.FieldName>
                        <S.Field name="user_name"/>
                        <S.FieldName>Email</S.FieldName>
                        <S.Field name="from_name"/>
                        <S.FieldName>Message</S.FieldName>
                        <S.Field as={"textarea"} name={"message"}/>
                        <StyledLink as={"button"} type="submit" value="Send">Send</StyledLink>
                    </S.StyledForm>
                </FlexWrapper>
            </Container>
        </S.ContactMe>
    );
};