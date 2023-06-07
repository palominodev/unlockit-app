import { Card, CardContent, CircularProgress, Grid } from "@mui/material"

export const CheckingSend = () => {
	return (
		<Card sx={{ position: 'sticky', top: '16px' }} >
			<CardContent>
				<Grid container justifyContent={'center'} padding={1} >
					<Grid item container justifyContent={'center'} xs={12} >
						<CircularProgress />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}