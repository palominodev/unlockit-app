import { Grid } from "@mui/material"
import { FeedCard } from "./FeedCard"

export const FeedContent = () => {
  return (
	<Grid sx={{width:'375px'}} padding={2} gap={2} container>
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