import { MoreVert } from "@mui/icons-material"
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"

export const FeedCard = () => {
  return (
	<Card>
		<CardHeader
			sx={{fontSize: '16px'}}
			title={'Palomino Fernandez Jeremy'}
			subheader={'September 14, 2023'}
			action={
				<IconButton aria-label="settings">
					<MoreVert  />
				</IconButton>
			}
		/>
		<CardContent>
			<Typography variant="h6">
				Lorem ipsum dolor sit amet.
			</Typography>
			<Typography variant="body2" >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus blanditiis consequatur reiciendis quas distinctio cupiditate. Ipsum odio non libero! Assumenda qui esse mollitia earum dolor consequatur sed eius asperiores in. Earum non distinctio quibusdam facilis rem necessitatibus dignissimos amet?
			</Typography>
		</CardContent>
	</Card>
  )
}