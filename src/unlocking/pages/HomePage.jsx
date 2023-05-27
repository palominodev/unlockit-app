import { Grid } from "@mui/material"
import { FeedContent } from "../components/FeedContent"
import { SendAnserw } from "../views/SendAnserw"
import { MessageSent } from "../views/MessageSent"
import { TemplateBar } from "../../layout/TemplateBar"

export const HomePage = () => {
	return (
		<TemplateBar>
			<Grid marginTop={8} container>
				<Grid item xs={2}></Grid>
				<Grid padding={1} item xs={6}>
					<FeedContent />
				</Grid>
				<Grid sx={{ position: 'relative' }} padding={1} item xs={4}>
					<SendAnserw />
					{/* <MessageSent /> */}
				</Grid>
			</Grid>
		</TemplateBar>
	)
}