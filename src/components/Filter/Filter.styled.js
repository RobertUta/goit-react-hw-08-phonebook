import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const FormBody = styled.form`
    padding: 30px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 15px;
    border-radius: 10px;
    background-color: #fff;
    width: 450px;
    box-shadow: 0 0 0 1px rgba(3, 102, 214, 0.3) inset;
`;

export const FormTitle = styled.h2`
    padding: 0 0 15px 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    color: #1976d2;
`;

export const Input = styled(TextField)`
    width: 100%;
`;
