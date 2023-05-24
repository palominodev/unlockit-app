import { Google } from "@mui/icons-material"
import { Button, Divider, Grid, TextField, Typography } from "@mui/material"

export const RegisterPage = () => {
	return (
		<Grid container>
			<form>
				<Grid container margin={5} width={'500px'} gap={2}>
					<Grid item xs={12}>
						<Typography mb={2} textAlign={'center'} variant="h3" >Register</Typography>
						<TextField type="email" label='Email' fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField type='text' label='Name' fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField type='password' label='Password' fullWidth />
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