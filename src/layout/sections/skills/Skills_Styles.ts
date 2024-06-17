import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

const Skills = styled.section`
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 74px;
        padding: 10px;
    }
    
    ${SectionTitle} {
        margin-bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const GridWrapper = styled.div`
    width: 100%;
    gap: 90px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    justify-items: center;
    align-items: center;
`

export const S = {
    Skills,
    GridWrapper,
}