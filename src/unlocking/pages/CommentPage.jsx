import { Grid } from "@mui/material"
import { QuestionAndAnswer } from "../components/QuestionAndAnswer"
import { FeedContent } from "../components/FeedContent"
import { TemplateBar } from "../../layout/TemplateBar"

export const CommentPage = () => {
  return (
	<TemplateBar>
		<Grid container marginTop={8} gap={1}>
			<Grid item xs={5}>
				<QuestionAndAnswer />
			</Grid>
			<Grid item xs={5}>
				<FeedContent />
			</Grid>
		</Grid>
	</TemplateBar>
  )
}