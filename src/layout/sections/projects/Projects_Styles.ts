import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

// Projects

const Projects = styled.section`

    ${FlexWrapper} > div:nth-of-type(even) {
        flex-direction: row-reverse;
        
        & > div:first-of-type {
            border-radius: 0 24px 24px 0;
        }
        
        & > div:nth-of-type(2) {
            border-radius: 24px 0 0 24px;
        }

        @media screen and (max-width: 717px) {
            & > div:first-of-type {
                border-radius: 0 0 24px 24px;
            }

            & > div:nth-of-type(2) {
                border-radius: 24px 24px 0 0;
            }
        }
    }

    @media screen and (max-width: 717px) {
        ${FlexWrapper} > div {
            & > div:first-of-type {
                border-radius: 0 0 24px 24px;
            }
            
            & > div:nth-of-type(2) {
                border-radius: 24px 24px 0 0;
            }
        }
        
        ${FlexWrapper} > div {
            justify-content: center;
        }
    }
`

// Project

const Project = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    //flex-direction: column;
    background-color: ${theme.colors.primary};
    max-width: 992px;
    width: 100%;
    margin: 80px auto 0;
`

const ProjectPhotoWrapper = styled.div<{image: string}>`
    min-width: 344px;
    width: 50%;
    height: 526px;
    background-image: url(${props => props.image});
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.10);
    border-radius: 0 24px 24px 0;
`

const ProjectTextWrapper = styled.div`
    //max-width: 496px;
    min-width: 344px;
    width: 50%;
    background-color: #FFF;
    height: 526px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 50px 0 40px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.10);
    border-radius: 24px 0 0 24px;
`

const ProjectName = styled.h2`
    font-family: "Playfair Display", sans-serif;
    color: ${theme.colors.primaryFont};
    font-size: 40px;
    font-weight: 700;
    line-height: 60px; /* 150% */
`

const ProjectText = styled.p`
    margin: 24px 0;
    
    color: ${theme.colors.secondaryFont};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 150% */
`

const ViewLink = styled.a`
    width: 160px;
    height: 43px;
    display: block;
    padding: 8px 24px;
    border-radius: 24px;
    border: 1px solid ${theme.colors.primaryFont};
    
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px; /* 27px */
`

export const S = {
    Projects,
    Project,
    ProjectPhotoWrapper,
    ProjectTextWrapper,
    ProjectName,
    ProjectText,
    ViewLink,
}