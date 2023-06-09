import { Favorite, FavoriteBorderOutlined, Report } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startIsLikedCard, startSendDisliked, startSendLike } from "../../store/unlocking/thunks"
import { LIKE_STATUS } from "../../types/LIKE_STATUS"

export const FeedCard = ({displayName,answer,photoURL, timestamp, likes,id,uid}) => {
	const time = new Date(timestamp)
	const date = time.toString().split(' ').slice(0,5).join(' ')
	const dispatch = useDispatch()
	const { likeStatus } = useSelector(state => state.unlocking)
	const loading = likeStatus === LIKE_STATUS.LOADING

	const [like, setLike] = useState(likes.length)
	const [isLiked, setIsLiked] = useState(false)


	useEffect(() => {
		dispatch(startIsLikedCard({id,uid},setIsLiked))
	}, [])
	


	const onSendLike = () => {
		setIsLiked(!isLiked)
		if (isLiked) {
			setLike(like - 1)
			dispatch(startSendDisliked({uid}))
		} 
		else {
			setLike(like + 1)
			dispatch(startSendLike({uid}))
		}
	}
  return (
	<Card>
		<CardHeader
			sx={{fontSize: '16px'}}
			title={displayName}
			subheader={date}
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
				<IconButton 
					onClick={onSendLike} 
					disabled={loading}
				>
					{
						!isLiked 
							? <FavoriteBorderOutlined /> 
							: <Favorite sx={{color: 'red'}} />
					}
				</IconButton>
				<Typography variant="body2">{like} Likes</Typography>
				</Grid>
				<Grid item>
					<Avatar alt={displayName} src={photoURL} />
				</Grid>
			</Grid>
		</CardActions>
	</Card>
  )
}