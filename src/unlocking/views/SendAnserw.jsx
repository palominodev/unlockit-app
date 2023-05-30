import { Send } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export const SendAnserw = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { answerText, onInputChange} = useForm({
		answerText: ''
	})

	const onSendAnwser = () => {
		dispatch(startSendAnwser(answerText))
		navigate('/comment')
	}
	return (
		<Card sx={{ position: 'sticky', top: '76px' }} >
			<CardHeader title={'Pregunta del Dia:'} />
			<CardContent component='form'>
				<Typography variant="h6" component='p' >
					¿Como fue tu primer dia en clases? 
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