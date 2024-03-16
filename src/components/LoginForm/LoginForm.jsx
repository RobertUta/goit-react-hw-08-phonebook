import AppToastContainer from '../../components/AppToastContainer';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import {
    FormBody,
    Input,
    FormTitle,
    FormButtonsWrapper,
} from './LoginForm.styled';
import { loginThunk } from '../../redux/operations-auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
    const [emailValue, setEmailValue] = useState('');
    const [pswValue, setPswValue] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = evt => {
        if (evt.target.name === 'email') {
            setEmailValue(evt.target.value);
            localStorage.setItem('logEmail', evt.target.value);
            return;
        }
        if (evt.target.name === 'password') {
            setPswValue(evt.target.value);
            return;
        }
    };

    useEffect(() => {
        const restoredEmail = localStorage.getItem('logEmail') ?? '';
        setEmailValue(restoredEmail);
    }, []);

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const email = form.elements.email.value.toLowerCase();
        const password = form.elements.password.value;
        dispatch(loginThunk({ email, password }))
            .unwrap()
            .then(() => resetFormFields())
            .catch(() =>
                toast.error(
                    'Check if your e-mail and password are correct and try again...'
                )
            );
    };

    const isReadyToSubmit = () => Boolean(emailValue && pswValue);
    const isReadyToReset = () => Boolean(emailValue || pswValue);

    const resetFormFields = () => {
        setEmailValue('');
        setPswValue('');
        localStorage.removeItem('logEmail');
    };

    return (
        <FormBody autoComplete="off" onSubmit={handleSubmit}>
            <FormTitle>Enter your e-mail and password</FormTitle>

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
                    Login
                </Button>
                <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={resetFormFields}
                    disabled={!isReadyToReset()}
                >
                    Reset
                </Button>
            </FormButtonsWrapper>
            <AppToastContainer />
        </FormBody>
    );
}
