import { doc, getDoc, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const sendingDisliked = async({id,uid,commentId}) => {
	const docRef = doc(FirebaseDB, `/questions/${id}/comment/${commentId}`)
	const Doc = await getDoc(docRef)
	const likes = Doc.data().likes.filter(like => like.uid !== uid)

	await updateDoc(docRef, {
		likes
	})
}