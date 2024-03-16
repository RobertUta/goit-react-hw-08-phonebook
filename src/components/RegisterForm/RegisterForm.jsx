import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import {
    FormBody,
    Input,
    FormTitle,
    FormButtonsWrapper,
} from './RegisterForm.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/operations-auth';

export default function RegisterForm() {
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [pswValue, setPswValue] = useState('');

    const handleInputChange = evt => {
        if (evt.target.name === 'name') {
            setNameValue(evt.target.value);
            localStorage.setItem('regName', evt.target.value);
            return;
        }
        if (evt.target.name === 'email') {
            setEmailValue(evt.target.value);
            localStorage.setItem('regEmail', evt.target.value);

            return;
        }
        if (evt.target.name === 'password') {
            setPswValue(evt.target.value);
            return;
        }
    };

    useEffect(() => {
        const restoredName = localStorage.getItem('regName') ?? '';
        const restoredEmail = localStorage.getItem('regEmail') ?? '';
        setNameValue(restoredName);
        setEmailValue(restoredEmail);
    }, []);

    const isReadyToSubmit = () => Boolean(nameValue && emailValue && pswValue);
    const isReadyToReset = () => Boolean(nameValue || emailValue || pswValue);

    const resetFormFields = () => {
        setNameValue('');
        setEmailValue('');
        setPswValue('');
        localStorage.removeItem('regName');
        localStorage.removeItem('regEmail');
    };
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.toLowerCase();
        const password = form.elements.password.value;
        dispatch(registerThunk({ name, email, password }))
            .unwrap()
            .then(() => resetFormFields())
            .catch(() =>
                toast.error(
                    'Something went wrong. For example check if the e-mail contains the characters "@" ,"." and 2 or more characters after "." Please try again'
                )
            );
    };

    return (
        <FormBody autoComplete="off" onSubmit={handleSubmit}>
            <FormTitle>Fill out the registration form</FormTitle>
            <Input
                size="small"
                label="name"
                name="name"
                type="text"
                placeholder="name"
                value={nameValue}
                onChange={handleInputChange}
                inputProps={{
                    pattern: '.{2,}',
                    title: 'name must be 2 characters or more',
                }}
            />
            <Input
                size="small"
                label="e-mail"
                name="email"
                type="text"
                placeholder="e-mail"
                value={emailValue}
                onChange={handleInputChange}
                inputProps={{
                    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
                    title: 'the e-mail must contain the characters "@" ,"." and 2 or more characters after "."',
                }}
            />

            <Input
                size="small"
                label="password"
                type="password"
                name="password"
                placeholder="password"
                autoComplete="off"
                value={pswValue}
                onChange={handleInputChange}
                inputProps={{
                    pattern: '.{7,}',
                    title: 'password must be 7 characters or more',
                }}
            />
            <FormButtonsWrapper>
                <Button
                    type="submit"
                    variant="outlined"
                    size="small"
                    disabled={!isReadyToSubmit()}
                >
                    Register
                </Button>
                <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    disabled={!isReadyToReset()}
                    onClick={resetFormFields}
                >
                    Reset
                </Button>
            </FormButtonsWrapper>
        </FormBody>
    );
}
