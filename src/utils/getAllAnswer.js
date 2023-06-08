import { collection,getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const getAllAnswer = async(id) => {
	const collectionsAnswer = await getDocs(collection(FirebaseDB,"/questions/k7nixuiiUqKme1RzlGqI/comment"))
	const allAnswers = []
	collectionsAnswer.forEach(doc => {
		allAnswers.push(doc.data())
	})

	console.log(allAnswers)
	return allAnswers
}