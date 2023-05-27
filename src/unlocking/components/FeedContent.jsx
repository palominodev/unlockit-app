import { Grid } from "@mui/material"
import { FeedCard } from "./FeedCard"

export const FeedContent = () => {
  return (
	<Grid gap={2} container>
		<Grid item >
			<FeedCard />
		</Grid>
		<Grid item >
			<FeedCard />
		</Grid>
		<Grid item >
			<FeedCard />
		</Grid>
		<Grid item >
			<FeedCard />
		</Grid>
	</Grid>
  )
}