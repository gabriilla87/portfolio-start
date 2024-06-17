import React from 'react';
import {S} from "./Projects_Styles";

type ProjectPropsType = {
    name: string
    text: string
    image: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
                <S.ProjectTextWrapper>
                    <S.ProjectName>{props.name}</S.ProjectName>
                    <S.ProjectText>{props.text}</S.ProjectText>
                    <S.ViewLink>View Project</S.ViewLink>
                </S.ProjectTextWrapper>

                <S.ProjectPhotoWrapper image={props.image}>
                </S.ProjectPhotoWrapper>
        </S.Project>
    );
};

