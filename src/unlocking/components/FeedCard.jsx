import { FavoriteOutlined, Report } from "@mui/icons-material"
import { Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from "@mui/material"

export const FeedCard = () => {
  return (
	<Card>
		<CardHeader
			sx={{fontSize: '16px'}}
			title={'Palomino Fernandez Jeremy'}
			subheader={'September 14, 2023'}
			action={
				<Tooltip title={'Reportar'}>
					<IconButton aria-label="report">
						<Report  />
					</IconButton>
				</Tooltip>
			}
		/>
		<CardContent>
			<Typography variant="h6">
				Lorem ipsum dolor sit amet.
			</Typography>
			<Typography variant="body2" >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus blanditiis consequatur reiciendis quas distinctio cupiditate. 
			</Typography>
		</CardContent>
		<CardActions>
			<Tooltip title={'Like'}>
				<IconButton>
					<FavoriteOutlined />
				</IconButton>
			</Tooltip>
				<Typography variant="body2">13 Likes</Typography>
		</CardActions>
	</Card>
  )
}