import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config.js";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
	const errorMessage = error.message
	const errorCode = error.code
	return {
		ok: false,
		errorMessage,
		errorCode,
	}
  }
};

export const signInWithEmailPassword = async({email,password}) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth,email,password)
    const {displayName, photoURL, uid } = result.user
    
    return {
      ok: true,
      displayName,
      photoURL,
      uid,
      email,
    }

  } catch (error) {
      const errorMessage = error.message
      const errorCode = error.code
      return {
        ok: false,
        errorMessage,
        errorCode
      }
  }
}