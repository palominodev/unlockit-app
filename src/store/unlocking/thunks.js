import { getQuestion } from "../../utils/getQuestion"
import { setQuestion } from "./unlockingSlice"

export const startSendAnwser = (anwser) => {
	return async (dispatch) => {
		//TODO: Crear el enlace con Firestore

	}
}

export const startSetQuestion = () => {
	return async (dispatch) => {
		const {question,id} = await getQuestion()
		dispatch(setQuestion({question,id}))
	}
}