import { getQuestion } from "../../utils/getQuestion"
import { setAnswer } from "../../utils/setAnswer"
import { setQuestion } from "./unlockingSlice"

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