import { configureStore } from '@reduxjs/toolkit';


import { persistStore } from 'redux-persist';

import { contactsReducer } from './contacts/contactsSlice';
import { persistedAuthReducer } from './auth/authSlice';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { filtersReducer } from './filters/filtersSlice';


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