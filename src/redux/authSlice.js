import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operations-auth';
import { loginThunk } from './operations-auth';
import { logoutThunk } from './operations-auth';
import { refreshThunk } from './operations-auth';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: { name: null, email: null },
        token: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
            .addCase(registerThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(registerThunk.rejected, state => {
                state.isLoading = false;
            })
            .addCase(loginThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(loginThunk.rejected, state => {
                state.isLoading = false;
            })
            .addCase(logoutThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(logoutThunk.fulfilled, state => {
                state.isLoggedIn = false;
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoading = false;
            })
            .addCase(logoutThunk.rejected, state => {
                state.isLoading = false;
            })
            .addCase(refreshThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(refreshThunk.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(refreshThunk.rejected, state => {
                state.isLoading = false;
            });
    },
});

export const authReducer = authSlice.reducer;
