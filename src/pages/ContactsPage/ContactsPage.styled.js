import styled from '@emotion/styled';
import Container from '../../components/common/Container/';

export const Main = styled.main`
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 69px);
    background-color: #e7ebf0;
`;

export const ContactsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-bottom: 10px;

    font-size: 30px;
    font-weight: bold;
`;

export const NoContactsWrapper = styled.div`
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #1976d2;
    width: 450px;
`;

export const NoContactsMessage = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    color: #f7f710;
`;

export const Section = styled.section`
    padding: 10px 0 0 0;
`;
