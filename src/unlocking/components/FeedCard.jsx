import { FavoriteOutlined, Report } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from "@mui/material"

export const FeedCard = ({displayName,answer,photoURL}) => {
  return (
	<Card>
		<CardHeader
			sx={{fontSize: '16px'}}
			title={displayName}
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
			<Typography variant="body2" >
				{answer}
			</Typography>
		</CardContent>
		<CardActions>
			<Grid
				justifyContent={'space-between'} 
				container>
				<Grid item>
				<Tooltip title={'Like'}>
				<IconButton>
					<FavoriteOutlined />
					</IconButton>
				</Tooltip>
					<Typography variant="body2">13 Likes</Typography>
				</Grid>
				<Grid item>
					<Avatar alt={displayName} src={photoURL} />
				</Grid>
			</Grid>
		</CardActions>
	</Card>
  )
}