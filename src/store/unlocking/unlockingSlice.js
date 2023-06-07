import { createSlice } from '@reduxjs/toolkit';
import { UNLOCKING_STATUS } from '../../types/UNLOCKING_STATUS'

export const unlockingSlice = createSlice({
	name: 'unlocking',

	initialState: {
		status: UNLOCKING_STATUS.LOADING,
		question: null,
		answer: null,
		allAnswer: []
	},

	reducers: {
		setAnswer: () => {

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
		}
	},
});


export const { setAnswer,setStatus, setQuestion } = unlockingSlice.actions;