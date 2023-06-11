import { collection, getDocs, query, orderBy } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config.js"

export const getQuestion = async() => {
	const questions = query(collection(FirebaseDB, 'questions'), orderBy('fecha', 'asc'))

	const queryDocs = await getDocs(questions)
	console.log(queryDocs._docs.at(0).data())

	return {
		question: queryDocs._docs.at(-1).data().texto,
		id: queryDocs._docs.at(-1).id
	}
}