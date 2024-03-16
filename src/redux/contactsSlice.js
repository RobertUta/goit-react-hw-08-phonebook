import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './operations';
import { deleteContactThunk } from './operations';
import { addContactThunk } from './operations';
const contactsInitialState = {
    contacts: {
        items: [],
        status: null,
        error: null,
    },
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.pending, state => {
                state.contacts.error = null;
                state.contacts.status = 'loading';
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.contacts.error = null;
                state.contacts.status = 'resolved';
                state.contacts.items = action.payload;
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
                state.contacts.status = 'rejected';
                state.contacts.error = action.payload;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.contacts.error = null;
                const id = action.payload;
                state.contacts.items = state.contacts.items.filter(
                    item => item.id !== id
                );
            })
            .addCase(deleteContactThunk.rejected, state => {
                state.contacts.status = 'rejected';
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.contacts.error = null;
                state.contacts.status = 'resolved';
                state.contacts.items.push(action.payload);
            })
            .addCase(addContactThunk.rejected, state => {
                state.contacts.status = 'rejected';
            });
    },
});
export const contactsReducer = contactsSlice.reducer;
