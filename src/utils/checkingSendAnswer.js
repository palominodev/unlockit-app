import { FirebaseDB } from "../firebase/config";
import { doc, getDoc } from 'firebase/firestore/lite'

export const checkingSendAnswer = async({id,uid}) => {
	const docRef = doc(FirebaseDB, `questions/${id}/comment/${uid}` );
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return true
	} else {
	// docSnap.data() will be undefined in this case
		return false
	}
}