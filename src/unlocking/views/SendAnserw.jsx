import { Send } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { startSendAnwser, startSetQuestion } from "../../store/unlocking/thunks"

export const SendAnserw = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { question } = useSelector(state => state.unlocking)
	const { answerText, onInputChange} = useForm({
		answerText: ''
	})

	const onSendAnwser = async() => {
		dispatch(startSendAnwser({answerText}))
		navigate('/comment')
	}

	useEffect(() => {
		dispatch(startSetQuestion({answerText}))
	}, [])

	
	return (
		<Card sx={{ position: 'sticky', top: '76px' }} >
			<CardHeader title={'Pregunta del Dia:'} />
			<CardContent component='form'>
				<Typography variant="h6" component='p' >
					{question?.question} 
				</Typography>
				<TextField
					onChange={onInputChange}
					value={answerText}
					name='answerText'
					label='Tu respuesta'
					maxRows={12}
					fullWidth
					multiline
					margin='normal' />
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }} >
				<Button 
					variant="contained"
					onClick={onSendAnwser}
					endIcon={
					<Send />
				}>
					Enviar
				</Button>
			</CardActions>
		</Card>
	)
}