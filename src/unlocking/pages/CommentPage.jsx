import { Grid } from "@mui/material"
import { QuestionAndAnswer } from "../components/QuestionAndAnswer"
import { FeedContent } from "../components/FeedContent"

export const CommentPage = () => {
  return (
	<Grid container gap={1}>
		<Grid item xs={5}>
			<QuestionAndAnswer />
		</Grid>
		<Grid item xs={5}>
			<FeedContent />
		</Grid>
	</Grid>
  )
}