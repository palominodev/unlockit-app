import { Grid } from "@mui/material"
import { FeedContent } from "../components/FeedContent"
import { SendAnserw } from "../views/SendAnserw"
import { MessageSent } from "../views/MessageSent"

export const HomePage = () => {
  return (
	<Grid  container>
		<Grid item xs={2}></Grid>
		<Grid padding={1} item xs={6}>
			<FeedContent />
		</Grid>
		<Grid sx={{position: 'relative'}} padding={1} item xs={4}>
			<SendAnserw />
			{/* <MessageSent /> */}
		</Grid>
	</Grid>
  )
}