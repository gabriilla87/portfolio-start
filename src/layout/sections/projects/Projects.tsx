import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {SectionTitle} from "../../../components/SectionTitle";
import firstProjectImg from "../../../assets/img/firstProject.jpg";
import secondProjectImg from "../../../assets/img/secondProject.jpg";
import thirdProjectImg from "../../../assets/img/thirdProject.jpg";
import {S} from "./Projects_Styles";

const projectsData = [
    {
        image: firstProjectImg,
        text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
    },

    {
        image: secondProjectImg,
        text: "What was your role, your deliverables, if the project was personal, freelancing."
    },

    {
        image: thirdProjectImg,
        text: "You can also add in this description the type of the project, if it was for web, mobile, electron."
    },
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projectsSection"}>
            <Container>
                <FlexWrapper direction={"column"}>
                    <SectionTitle>Projects</SectionTitle>

                    {projectsData.map((s, index) => {
                        return <Project image={s.image} key={index}
                                        name={"Project Name"}
                                        text={s.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};