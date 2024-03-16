import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const axiosTokenService = {
    setToken: token =>
        (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`),

    unsetToken: () => (axios.defaults.headers.common['Authorization'] = ''),
};

export const registerThunk = createAsyncThunk(
    'auth/register',

    async function ({ name, email, password }, { rejectWithValue }) {
        try {
            const response = await axios.post('/users/signup', {
                name,
                email,
                password,
            });
            axiosTokenService.setToken(response.data.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login',

    async function ({ email, password }, { rejectWithValue }) {
        try {
            const response = await axios.post('/users/login', {
                email,
                password,
            });
            axiosTokenService.setToken(response.data.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',

    async function (_, { rejectWithValue }) {
        try {
            await axios.post('/users/logout');
            axiosTokenService.unsetToken();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refreshThunk = createAsyncThunk(
    'auth/refresh',

    async function (_, { rejectWithValue, getState }) {
        if (!getState().auth.token) {
            return rejectWithValue();
        }

        try {
            axiosTokenService.setToken(getState().auth.token);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
