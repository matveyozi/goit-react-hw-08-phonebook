import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filtersSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const appReducer = persistReducer(persistConfig, rootReducer);

