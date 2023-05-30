import { createSlice } from '@reduxjs/toolkit';
import { UNLOCKING_STATUS } from '../../types/UNLOCKING_STATUS'

export const unlockingSlice = createSlice({
	name: 'unlocking',

	initialState: {
		status: UNLOCKING_STATUS.NOT_SEND,
		question: null,
		answer: null,
		allAnswer: []
	},

	reducers: {
		setAnswer: () => {

		},
		setQuestion: (state, { payload }) => {
			console.log(payload)
			state.question = payload
		}
	},
});


export const { setAnswer, setQuestion } = unlockingSlice.actions;