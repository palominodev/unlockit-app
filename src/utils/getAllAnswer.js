import { collection,getDocs, orderBy, query } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const getAllAnswer = async(id) => {
	const collectionsAnswerRef = query(collection(FirebaseDB,`/questions/${id}/comment`), orderBy('timestamp', 'desc'))
	const collectionsAnswer = await getDocs(collectionsAnswerRef)
	const allAnswers = []
	collectionsAnswer.forEach(doc => {
		allAnswers.push(doc.data())
	})

	return allAnswers
}