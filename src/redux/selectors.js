import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilterValue = state => state.filter.filter;
export const selectContactsState = state => state.contacts.contacts;
export const selectCurrentUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsUserLoggedIn = state => state.auth.isLoggedIn;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterValue],
    (allContacts, filterValue) => {
        if (filterValue !== '') {
            return allContacts.filter(contact =>
                contact.name.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        return allContacts;
    }
);
