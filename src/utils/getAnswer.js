import { FirebaseDB } from "../firebase/config";
import { doc, getDoc } from 'firebase/firestore/lite';


export const getAnswer = async({id,uid}) => {
	const docRef = doc(FirebaseDB, `questions/${id}/comment/${uid}` );
	const docSnap = await getDoc(docRef);
	console.log(docSnap.data().answer)
	return docSnap.data().answer
}