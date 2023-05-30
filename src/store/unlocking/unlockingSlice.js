import { createSlice } from '@reduxjs/toolkit';

export const unlockingSlice = createSlice({
	name: 'unlocking',

	initialState: {
		answer: null,
		allAnswer: []
	},

	reducers: {
		setAnswer: () => {

		}
	},
});


export const { setAnswer } = unlockingSlice.actions;