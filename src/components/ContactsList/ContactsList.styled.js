import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ContactListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 600px;
    padding: 30px 20px;

    border-radius: 10px;
    background-color: #fff;

    box-shadow: 0 0 0 1px rgba(3, 102, 214, 0.3) inset;
`;

export const Title = styled.h3`
    padding: 0 0 24px 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    color: #1976d2;
`;

export const ContactList = styled.table`
    width: 100%;
`;

export const TableHeadRow = styled.tr`
    //for screen readers
    color: transparent;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 1px;
    font-size: 1px;
`;

export const ContactListItem = styled.tr`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    display: flex;
    font-size: 17px;
    border-bottom: 1px dashed grey;
`;

export const NameText = styled.td`
    font-size: 16px;
    min-width: 250px;
`;
export const NumberText = styled.td`
    font-size: 16px;
    min-width: 150px;
`;
export const BtnWrapper = styled.td``;

export const StyledBtn = styled(Button)`
    font-size: 13px;
    padding: 0;
    text-transform: capitalize;
`;
