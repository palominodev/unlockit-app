import { checkingSendAnswer } from "../../utils/checkingSendAnswer"
import { getAllAnswer } from "../../utils/getAllAnswer"
import { getAnswer } from "../../utils/getAnswer"
import { getQuestion } from "../../utils/getQuestion"
import { setAnswer } from "../../utils/setAnswer"
import { setAllAnswers, setQuestion, setStateAnswer, setStatus } from "./unlockingSlice"

export const startSendAnwser = ({answerText}) => {
	return async (dispatch,getState) => {
		const {question} = getState().unlocking
		const { displayName, photoURL, uid } = getState().auth

		await setAnswer({
			uid,
			id: question.id,
			answer: answerText,
			displayName,
			photoURL
		})


	}
}

export const startSetQuestion = () => {
	return async (dispatch) => {
		const {question,id} = await getQuestion()
		dispatch(setQuestion({question,id}))
	}
}

export const startCheckingSend = () => {
	return async(dispatch, getState) => {
		const { uid } = getState().auth
		const { question } = getState().unlocking
		if(!question) return
		const isSend = await checkingSendAnswer({
			id: question.id,
			uid
		})
		dispatch(setStatus({isSend}))
	}
}

export const startGetAnswer = () => {
	return async(dispatch,getState) => {
		const { uid } = getState().auth
		const { question } = getState().unlocking
		if(!question) return
		const answer = await getAnswer({uid, id: question.id})
		dispatch(setStateAnswer({answer}))
	}
}

export const startGetAllAnswers = () => {
	return async(dispatch,getState) => {
		const { question } = getState().unlocking
		if(!question) return 
		const allAnswers = await getAllAnswer(question.id)
		dispatch(setAllAnswers({allAnswers}))
	}
}