import { doc, getDoc, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const sendingLike = async({id,uid,commentId}) => {
	const docRef = doc(FirebaseDB, `/questions/${id}/comment/${commentId}`)
	const Doc = await getDoc(docRef)
	const likes = Doc.data().likes
	await updateDoc(docRef, {
		likes: [...likes, {uid}]
	})
}