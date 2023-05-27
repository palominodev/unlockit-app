import { MessageOutlined } from "@mui/icons-material"
import { Button, Card, CardContent, Grid, Typography } from "@mui/material"

export const MessageSent = () => {
  return (
		<Card sx={{position: 'sticky', top: '16px'}} >
			<CardContent>
				<Grid container justifyContent={'center'} padding={1} >
					<Grid item container justifyContent={'center'} xs={12} >
							<MessageOutlined sx={{fontSize:'40px'}} />
					</Grid>
					<Grid item xs={12}>
						<Typography textAlign={'center'} variant="h6" component='p' >
							El mensaje ya fue enviado
						</Typography>
					</Grid>
					<Grid item container justifyContent={'center'} xs={12} >
						<Button sx={{marginTop:2}} variant="contained" >
							Ver
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
  )
}