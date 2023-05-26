import { Send } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from "@mui/material"

export const SendAnserw = () => {
	return (
		<Card sx={{ position: 'sticky', top: '16px' }} >
			<CardHeader title={'Pregunta del Dia:'} />
			<CardContent component='form'>
				<Typography variant="h6" component='p' >
					¿Como fue tu primer dia en clases?
				</Typography>
				<TextField
					// rows={3}
					maxRows={12}
					fullWidth
					multiline
					margin='normal'
					placeholder="Tu respuesta" />
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }} >
				<Button variant="contained" endIcon={
					<Send />
				}>
					Enviar
				</Button>
			</CardActions>
		</Card>
	)
}