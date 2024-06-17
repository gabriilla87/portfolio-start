import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/Icon";
import {S} from "./Footer_Styles";

const socialIconData = [
    {
        iconId: "instagram",
        width: "48",
        height: "49",
        viewBox: "0 0 48 49",
    },

    {
        iconId: "linkedIn",
        width: "38",
        height: "39",
        viewBox: "0 0 38 39",
    },
    {
        iconId: "mail",
        width: "42",
        height: "33",
        viewBox: "0 0 42 33",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <ul>

                        {socialIconData.map((s, index) => {
                            return(
                                <S.SocialIconItem key={index}>
                                    <S.Link href="">
                                        <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
                                    </S.Link>
                                </S.SocialIconItem>
                            )
                        })}

                    </ul>
                    <S.Copyright>Kazyutchiz Vladislav 2024 </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};