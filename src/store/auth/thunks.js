import { signInWithEmailPassword, signInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

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