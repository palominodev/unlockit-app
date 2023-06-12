import { createSlice } from '@reduxjs/toolkit';
import { UNLOCKING_STATUS } from '../../types/UNLOCKING_STATUS'
import { LIKE_STATUS } from '../../types/LIKE_STATUS';

export const unlockingSlice = createSlice({
	name: 'unlocking',

	initialState: {
		status: UNLOCKING_STATUS.LOADING,
		question: null,
		answer: null,
		allAnswers: [],
		likeStatus: LIKE_STATUS.READY
	},

	reducers: {
		setStateAnswer: (state, { payload }) => {
			state.answer = payload.answer
		},
		setQuestion: (state, { payload }) => {
			state.question = payload
		},
		setStatus: (state, { payload }) => {
			if (payload.isSend) {
				state.status = UNLOCKING_STATUS.SEND
			} else {
				state.status = UNLOCKING_STATUS.NOT_SEND
			}
		},
		setAllAnswers: (state, { payload }) => {
			state.allAnswers = payload.allAnswers;
		},
		setLikeLoading: (state) => {
			state.likeStatus = LIKE_STATUS.LOADING
		},
		setLikeReady: (state) => {
			state.likeStatus = LIKE_STATUS.READY
		}
	},
});


export const { setStateAnswer, setStatus, setAllAnswers, setQuestion, setLikeLoading, setLikeReady } = unlockingSlice.actions;