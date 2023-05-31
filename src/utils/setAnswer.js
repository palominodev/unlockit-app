import {  doc, addDoc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const setAnswer = async({uid,id,answer,displayName, photoURL}) => {

	// const docRef = await setDoc(collection(FirebaseDB,`questions/${id}/comment`, ), {
	// 	uid,
	// 	id,
	// 	answer,
	// 	displayName,
	// 	photoURL
	// })
	// console.log({
	// 	id,answer,displayName, photoURL
	// })
	await setDoc(doc(FirebaseDB, `questions/${id}/comment`, `${uid}`), {
		uid,
		id,
		answer,
		displayName,
		photoURL
	});

	console.log({
		uid,
		id,
		answer,
		displayName,
		photoURL
	})
}