import { Grid } from "@mui/material"
import { FeedContent } from "../components/FeedContent"
import { SendAnserw } from "../views/SendAnserw"
import { MessageSent } from "../views/MessageSent"
import { TemplateBar } from "../../layout/TemplateBar"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { startSetQuestion } from "../../store/unlocking/thunks"

export const HomePage = () => {

	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(startSetQuestion())
	},[])

	return (
		<TemplateBar>
			<Grid marginTop={8} container>
				<Grid item xs={2}></Grid>
				<Grid padding={1} item xs={6}>
					<FeedContent />
				</Grid>
				<Grid sx={{ position: 'relative' }} padding={1} item xs={4}>
					<SendAnserw />
					{/* <CheckingSend /> */}
					{/* <MessageSent /> */}
				</Grid>
			</Grid>
		</TemplateBar>
	)
}