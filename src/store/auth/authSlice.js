import { createSlice } from '@reduxjs/toolkit';
import { AUTH_STATUS } from '../../types/AUTH_STATUS';

export const authSlice = createSlice({
	name: 'auth',

	initialState: {
		status: AUTH_STATUS.CHECKING,
		uid: null,
		displayName: null,
		photoURL: null,
		email: null,
		errorMessage: null
	},

	reducers: {
		checkingCredentials: (state) => {
			state.status = AUTH_STATUS.CHECKING;
		},
		login: (state, {payload}) => {
			state.status = AUTH_STATUS.AUTHENTICATED
			state.uid = payload.uid
			state.displayName = payload.displayName
			state.photoURL = payload.photoURL
			state.email = payload.email
			state.errorMessage = payload?.errorMessage
		},
		logout: (state, {payload}) => {
			state.status = AUTH_STATUS.NOT_AUTHENTICATED
			state.uid = null
			state.displayName = null
			state.photoURL = null
			state.email = null
			state.errorMessage = payload.errorMessage
		}
	},
});


export const { login, logout , checkingCredentials } = authSlice.actions;