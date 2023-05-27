import { CircularProgress, Grid } from "@mui/material"

export const CheckAuth = () => {
	return (
		<Grid
			container
			spacing={0}
			direction={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			sx={{minHeight: '98vh', padding: 4}}
		>
			<Grid
				container
				direction={'row'}
				justifyContent={"center"}
			>
				<CircularProgress />
			</Grid>
		</Grid>
	)
}