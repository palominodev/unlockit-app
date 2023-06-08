import { Grid } from "@mui/material"
import { FeedCard } from "./FeedCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetAllAnswers } from "../../store/unlocking/thunks"

export const FeedContent = () => {

	const dispatch = useDispatch()
	const {question,allAnswers} = useSelector(state => state.unlocking)

	useEffect(() => {
		dispatch(startGetAllAnswers())
	}, [question])
	

  return (
	<Grid gap={2} container>
		{
			allAnswers.map((answer,i) => (
				<Grid key={i} item >
					<FeedCard {...answer} />
				</Grid>
			))
		}
	</Grid>
  )
}