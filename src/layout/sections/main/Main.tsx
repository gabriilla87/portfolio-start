import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledLink} from "../../../components/StyledLink";
import {Container} from "../../../components/Container";
import mainPicture from "../../../assets/img/mainPicture.png";
import {S} from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        //Эту секцию полностью глянуть
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap-reverse"} gap={'70px'}>
                    <S.TextWrapper>
                        <S.TextContainer>
                            <S.Profession>Software Developer</S.Profession>
                        </S.TextContainer>
                        <S.TextContainer>
                            <S.Name>Hello,  my name is Vahid Navazan</S.Name>
                        </S.TextContainer>
                        <S.TextContainer>
                            <S.Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</S.Text>
                        </S.TextContainer>
                        <FlexWrapper gap={"12px"}>
                            <StyledLink>Projects</StyledLink>
                            <StyledLink border={true} background={"transparent"}>LinkedIn</StyledLink>
                        </FlexWrapper>
                    </S.TextWrapper>

                    <S.PictureWrapper>
                        <img src={mainPicture} alt={"It's Me!!!"}/>
                    </S.PictureWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};