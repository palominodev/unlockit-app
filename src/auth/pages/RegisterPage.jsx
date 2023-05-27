import { Google } from "@mui/icons-material"
import { Button, Divider, Grid, TextField, Typography } from "@mui/material"
import { startCreateUserWithEmailPassword, startGoogleSignIn } from "../../store/auth/thunks"
import { useDispatch } from "react-redux"
import { useForm } from '../../hooks/useForm'

export const RegisterPage = () => {
	const { email, displayName, password, onInputChange, formState } = useForm({
		email: '',
		displayName: '',
		password: ''
	})
	const dispatch = useDispatch()
	const signInGoogle = () => {
		dispatch(startGoogleSignIn())
	}
	const onRegister = (event) => {
		event.preventDefault()
		dispatch(startCreateUserWithEmailPassword(formState))
	}
	return (
		<Grid container>
			<form onSubmit={onRegister}>
				<Grid container margin={5} width={'500px'} gap={2}>
					<Grid item xs={12}>
						<Typography mb={2} textAlign={'center'} variant="h3" >Register</Typography>
						<TextField 
							onChange={onInputChange}
							name='email'
							value={email}
							type="email" 
							label='Email' 
							fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField 
							onChange={onInputChange}
							name='displayName'
							value={displayName}
							type='text' 
							label='Name' 
							fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField 
							onChange={onInputChange}
							name='password'
							value={password}
							type='password' 
							label='Password' 
							fullWidth />
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Button
								type='submit'
								fullWidth
								sx={{ fontWeight: 'bold', padding: 1.5 }}
								color="error"
								variant="contained"
							>
								Registrarse
							</Button>
						</Grid>
						<Divider sx={{ width: '100%' }}>O</Divider>
						<Grid item xs={12}>
							<Button
								onClick={signInGoogle}
								color='error'
								variant='contained'
								fullWidth
								sx={{ fontWeight: 'bold', padding: 1.5 }}
								startIcon={<Google />}
							>
								Register by Google
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Grid>
	)
}