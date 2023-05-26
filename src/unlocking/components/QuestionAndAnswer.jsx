import { Card, CardContent, Typography } from "@mui/material"

export const QuestionAndAnswer = () => {
  return (
	<Card sx={{position:'sticky', top: '8px',padding: 2}}>
		<CardContent>
			<Typography 
				variant="h4" 
				fontSize={'25px'}
				marginBottom={2}
			>
				¿Cómo fue tu primer dia de colegio?
			</Typography>
			<Typography
				variant="body1"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ea?
			</Typography>
		</CardContent>
	</Card>
  )
}