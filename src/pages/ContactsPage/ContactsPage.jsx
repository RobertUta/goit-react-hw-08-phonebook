import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsState } from '../../redux/selectors.js';
import { fetchContactsThunk } from '../../redux/operations.js';
import PhonebookEditForm from '../../components/PhonebookEditForm/';
import Filter from '../../components/Filter/Filter.jsx';
import AppToastContainer from '../../components/AppToastContainer';
import ContactsList from '../../components/ContactsList';
import {
    Main,
    ContactsContainer,
    Section,
    NoContactsWrapper,
    NoContactsMessage,
} from './ContactsPage.styled';

export default function Contacts() {
    const { items, status, error } = useSelector(selectContactsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    if (status === 'loading')
        return (
            <Main>
                <Section>
                    <ContactsContainer>
                        <PhonebookEditForm />
                        <h1>DATA UPDATE</h1>
                    </ContactsContainer>
                </Section>
            </Main>
        );
    if (error)
        return (
            <Main>
                <Section>
                    <ContactsContainer>
                        <h1>{error}</h1>
                    </ContactsContainer>
                </Section>
            </Main>
        );

    return (
        <Main>
            <Section>
                <ContactsContainer>
                    <PhonebookEditForm />
                </ContactsContainer>
            </Section>
            {items.length > 0 && (
                <>
                    <Section>
                        <ContactsContainer>
                            <Filter />
                        </ContactsContainer>
                    </Section>
                    <Section>
                        <ContactsContainer>
                            <ContactsList />
                        </ContactsContainer>
                    </Section>
                </>
            )}
            {items.length === 0 && (
                <Section>
                    <ContactsContainer>
                        <NoContactsWrapper>
                            <NoContactsMessage>
                                You have no saved contacts, add them
                            </NoContactsMessage>
                        </NoContactsWrapper>
                    </ContactsContainer>
                </Section>
            )}
            <AppToastContainer />
        </Main>
    );
}
