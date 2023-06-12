import {  doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const setAnswer = async({uid,id,answer,displayName, photoURL}) => {

	const date = new Date()

	await setDoc(doc(FirebaseDB, `questions/${id}/comment`, `${uid}`), {
		uid,
		id,
		answer,
		displayName,
		photoURL,
		timestamp: date.getTime(),
		likes: []
	});
}