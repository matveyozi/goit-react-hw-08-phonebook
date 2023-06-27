import { configureStore } from '@reduxjs/toolkit';


import { persistStore } from 'redux-persist';

import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';
import { persistedAuthReducer } from './auth/authSlice';

import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';


export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		contacts: contactsReducer,
		filter: filtersReducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	],
});

export const persistor = persistStore(store);

