import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const ContactMe = styled.section`
    padding-bottom: 56px;
    
    ${SectionTitle} {
        margin-bottom: 80px;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    
    textarea {
        resize: none;
        height: 190px;
    }
    
    button {
        align-self: flex-end;
    }
`

const FieldName = styled.span`
    color: ${theme.colors.primaryFont};
    font-size: 16px;
    font-weight: 600;
`

const Field = styled.input`
    margin: 8px 0 24px;
    outline: none;
    height: 40px;

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`

export const S = {
    ContactMe,
    StyledForm,
    FieldName,
    Field,
}