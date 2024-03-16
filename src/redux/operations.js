import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/selectContacts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async function ({ name, number }, { rejectWithValue }) {
        const contact = {
            name,
            number,
        };
        try {
            const response = await axios.post(`/contacts`, contact);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async function (id, { rejectWithValue }) {
        try {
            await axios.delete(`/contacts/${id}`);

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
