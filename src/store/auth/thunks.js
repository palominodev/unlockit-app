import { signOut } from "firebase/auth"
import { createUserByPasswordAndEmail, signInWithEmailPassword, signInWithGoogle, updateDataUser } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"
import { FirebaseAuth } from "../../firebase/config"

export const startGoogleSignIn = () => {
	return async(dispatch) => {
		dispatch(checkingCredentials())
		const result = await signInWithGoogle()

		if(!result.ok) return dispatch(logout(result))
		
		dispatch(login(result))
	}
}

export const startLoginWithEmailPassword = ({email,password}) => {
	return async(dispatch) => {
		dispatch(checkingCredentials())
		const result = await signInWithEmailPassword({email,password})

		if(!result.ok) return dispatch(logout(result))
		
		dispatch(login(result))
	}
}

export const startCreateUserWithEmailPassword = ({email,password,displayName}) => {
	return async(dispatch) => {
		dispatch(checkingCredentials())
		const resp = await createUserByPasswordAndEmail({email,password})
		await updateDataUser({displayName})

		const {ok, result } = resp
		const { uid, photoURL } = result.user

		if(!ok) return dispatch(logout(result))

		dispatch(login({
			email, displayName, uid, photoURL
		}))

	}
}

export const startLogout = () => {
	return async(dispatch) => {
		dispatch(checkingCredentials())
		await signOut(FirebaseAuth)
		dispatch(logout())
	}
}