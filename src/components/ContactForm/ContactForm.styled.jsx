import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
    width: 400px;
    border: 2px solid red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center; 
    padding: 10px;
`

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 10px;
    
`
