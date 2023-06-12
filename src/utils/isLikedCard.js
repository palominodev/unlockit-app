import { doc, getDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const isLikedCard = async({uid,id,commentId}) => {
	const docRef = doc(FirebaseDB, `questions/${id}/comment/${commentId}`);
	const Doc = await getDoc(docRef)
	return (Doc.data().likes.some(like => like.uid === uid));
}