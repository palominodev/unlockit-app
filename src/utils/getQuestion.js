import { collection, getDocs, query } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config.js"

export const getQuestion = async() => {
	const questions = query(collection(FirebaseDB, 'questions'))

	const queryDocs = await getDocs(questions)

	return {
		question: queryDocs._docs.at(-1).data().texto,
		id: queryDocs._docs.at(-1).id
	}
}