import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"

export const LoginPage = () => {
	const {email, password, onInputChange, formState} = useForm({
		email: '',
		password: ''
	})

	const dispatch = useDispatch()

	const signInGoogle = () => {
		dispatch(startGoogleSignIn())
	}

	const onSubmit = (event) => {
		event.preventDefault()

		dispatch(startLoginWithEmailPassword(formState))
	}
	return (
		<Grid container>
			<form onSubmit={onSubmit}>
				<Grid container margin={5} width={'500px'} gap={2}>
					<Grid item xs={12}>
						<Typography mb={2} textAlign={'center'} variant="h3" >Login</Typography>
						<TextField 
							type="email"
							onChange={onInputChange}
							value={email}
							name="email" 
							label='Email' 
							fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField 
							type="password"
							onChange={onInputChange}
							value={password}
							name="password" 
							label='Password' 
							fullWidth />
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<Button
								type="submit"
								fullWidth
								sx={{ fontWeight: 'bold', padding: 1.5 }}
								color="error"
								variant="contained"
							>
								Ingresar
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								type="button"
								onClick={signInGoogle}
								color='error'
								variant='contained'
								fullWidth
								sx={{ fontWeight: 'bold', padding: 1.5 }}
								startIcon={<Google />}
							>
								Google
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Grid>
	)
}