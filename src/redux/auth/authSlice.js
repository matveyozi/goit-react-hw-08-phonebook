import { createSlice } from '@reduxjs/toolkit';

import authOperations from './authOperations';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// початковий стан
const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  }
});

const authReducer = authSlise.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);