import { doc, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const sendingLike = async({id,uid,likes}) => {
	const docRef = doc(FirebaseDB, `/questions/${id}/comment/${uid}`)
	await updateDoc(docRef, {
		likes: likes + 1
	})
}