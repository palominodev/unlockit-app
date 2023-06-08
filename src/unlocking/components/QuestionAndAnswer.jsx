import { Card, CardContent, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetAnswer, startSetQuestion } from "../../store/unlocking/thunks"

export const QuestionAndAnswer = () => {
	const {question, answer } = useSelector(state => state.unlocking)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startSetQuestion())
	}, [])
	useEffect(() => {
		dispatch(startGetAnswer())
	}, [question])
	

  return (
	<Card sx={{position:'sticky', top: '72px',padding: 2}}>
		<CardContent>
			<Typography 
				variant="h4" 
				fontSize={'25px'}
				marginBottom={2}
			>
				{question?.question}
			</Typography>
			<Typography
				variant="body1"
			>
				{answer}
			</Typography>
		</CardContent>
	</Card>
  )
}