import { FirebaseDB } from "../firebase/config";
import { doc, getDoc } from 'firebase/firestore/lite';


export const getAnswer = async({id,uid}) => {
	const docRef = doc(FirebaseDB, `questions/${id}/comment/${uid}` );
	const docSnap = await getDoc(docRef);
	return docSnap.data()?.answer
}