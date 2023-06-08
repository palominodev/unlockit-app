import { createSlice } from '@reduxjs/toolkit';
import { UNLOCKING_STATUS } from '../../types/UNLOCKING_STATUS'

export const unlockingSlice = createSlice({
	name: 'unlocking',

	initialState: {
		status: UNLOCKING_STATUS.LOADING,
		question: null,
		answer: null,
		allAnswers: []
	},

	reducers: {
		setStateAnswer: (state, {payload}) => {
			state.answer = payload.answer
		},
		setQuestion: (state, { payload }) => {
			state.question = payload
		},
		setStatus: (state, {payload}) => {
			console.log(payload);
			if(payload.isSend) {
				state.status = UNLOCKING_STATUS.SEND
			}else {
				state.status = UNLOCKING_STATUS.NOT_SEND
			}
		},
		setAllAnswers: (state, {payload}) => {
			state.allAnswers = payload.allAnswers;
		},
	},
});


export const { setStateAnswer,setStatus, setAllAnswers, setQuestion } = unlockingSlice.actions;