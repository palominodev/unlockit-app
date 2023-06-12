import { checkingSendAnswer } from "../../utils/checkingSendAnswer"
import { getAllAnswer } from "../../utils/getAllAnswer"
import { getAnswer } from "../../utils/getAnswer"
import { getQuestion } from "../../utils/getQuestion"
import { sendingLike } from "../../utils/sendingLike"
import { sendingDisliked } from "../../utils/sendingDisliked"
import { setAnswer } from "../../utils/setAnswer"
import { setAllAnswers, setLikeLoading, setLikeReady, setQuestion, setStateAnswer, setStatus } from "./unlockingSlice"
import { isLikedCard } from "../../utils/isLikedCard"

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

export const startSendLike = ({uid:commentId}) => {
	return async (dispatch,getState) => {
		dispatch(setLikeLoading())
		const {question} = getState().unlocking
		const {uid} = getState().auth
		await sendingLike({id:question.id, uid,commentId})
		dispatch(setLikeReady())
	}
}

export const startSendDisliked = ({uid:commentId}) => {
	return async (dispatch,getState) => {
		dispatch(setLikeLoading())
		const {question} = getState().unlocking
		const {uid} = getState().auth
		await sendingDisliked({id:question.id, uid,commentId})
		dispatch(setLikeReady())
	}
}

export const startIsLikedCard = ({id,uid:commentId},setIsLiked) => {
	return async(dispatch,getState) => {
		const {uid} = getState().auth
		const isLiked = await isLikedCard({uid,id,commentId})
		setIsLiked(isLiked)
	}
}