import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) =>
        handleRejected(state, action)
      )
      // додавання контакту
      .addCase(addContact.pending, (state, action) => handlePending(state))
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(deleteContact.pending, (state, action) => handlePending(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) =>
        handleRejected(state, action)
      );
  },


});

export const contactsReducer = contactsSlice.reducer;