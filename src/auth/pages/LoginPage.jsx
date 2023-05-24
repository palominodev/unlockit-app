import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
	return (
		<Grid container>
			<form>
				<Grid container margin={5} width={'500px'} gap={2}>
					<Grid item xs={12}>
						<Typography mb={2} textAlign={'center'} variant="h3" >Login</Typography>
						<TextField label='Email' fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label='Password' fullWidth />
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<Button
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
								color='error'
								variant='contained'
								fullWidth
								sx={{fontWeight: 'bold', padding: 1.5}}
								startIcon={ <Google /> }
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