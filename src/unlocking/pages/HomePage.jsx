import { Grid } from "@mui/material"
import { FeedContent } from "../components/FeedContent"

export const HomePage = () => {
  return (
	<Grid container>
		<Grid item xs={2} >
			{/* <FeedContent /> */}
		</Grid>
		<Grid item xs={6} >
			<FeedContent />
		</Grid>
		<Grid item xs={4} >
			<FeedContent />
		</Grid>
	</Grid>
  )
}