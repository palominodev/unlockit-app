import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config.js";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth";

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

export const createUserByPasswordAndEmail = async({email,password}) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth,email,password)

    return {
      ok: true,
      result
    }

  } catch(error) {
    console.log(error)
  }
}

export const updateDataUser = async(user) => {
  try {
    const Auth = getAuth()
    await updateProfile(Auth.currentUser, user)
  } catch(error) {
    console.log(error);
  }
}