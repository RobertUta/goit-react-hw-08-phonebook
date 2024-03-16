import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { selectContacts } from '../../redux/selectors';
import { addContactThunk } from '../../redux/operations';
import { FormBody, Input, Button, FormTitle } from './PhonebookEditForm.styled';

const checkOnSameName = (contacts, name) => {
    return Boolean(
        contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        )
    );
};

export default function PhonebookEditForm() {
    const [nameInputValue, setNameInputValue] = useState('');
    const [numberInputValue, setNumberInputValue] = useState('');

    const allContacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const formReset = () => {
        setNameInputValue('');
        setNumberInputValue('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        if (name === '') return;

        if (checkOnSameName(allContacts, name)) {
            return toast.info(`${name} is already in contacts`);
        }

        dispatch(addContactThunk({ name, number }))
            .unwrap()
            .then(() => toast.success('The contact was successfully added'))
            .catch(() => toast.error('Something went wrong. Please try again'));

        formReset();
    };

    const isReadyToSubmit = () => Boolean(nameInputValue && numberInputValue);

    return (
        <FormBody onSubmit={handleSubmit}>
            <FormTitle>Add contact to your phonebook</FormTitle>
            <Input
                name="name"
                type="text"
                label="enter new contact name"
                size="small"
                value={nameInputValue}
                onChange={evt => setNameInputValue(evt.target.value)}
                inputProps={{
                    pattern:
                        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                    title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
                }}
            />
            <Input
                name="number"
                type="tel"
                label="enter phone number"
                size="small"
                value={numberInputValue}
                onChange={evt => setNumberInputValue(evt.target.value)}
                inputProps={{
                    pattern: `^[\+]?[(]?[0-9]{1,5}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,6}$`, //eslint-disable-line
                    title: 'Enter the number in the following formats: +xxxxxxxxxxxx, +xxxxx-xxx-xxxx or without "+", the maximum amount of digits in a number is 14',
                }}
            />
            <Button
                type="submit"
                variant="outlined"
                size="small"
                disabled={!isReadyToSubmit()}
            >
                Add contact
            </Button>
        </FormBody>
    );
}
