import { Grid } from "@mui/material"
import { FeedContent } from "../components/FeedContent"
import { SendAnserw } from "../views/SendAnserw"
import { MessageSent } from "../views/MessageSent"
import { TemplateBar } from "../../layout/TemplateBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { startCheckingSend, startSetQuestion } from "../../store/unlocking/thunks"
import { CheckingSend } from "../views/CheckingSend"
import { UNLOCKING_STATUS } from "../../types/UNLOCKING_STATUS"

export const HomePage = () => {

	const dispatch = useDispatch()
	const { question, status } = useSelector(state => state.unlocking)

	useEffect(() => {
		dispatch(startCheckingSend())
	}, [question])

	useEffect(() => {
		dispatch(startSetQuestion())
		const a = (status === UNLOCKING_STATUS.SEND) ? 'MessageSent' : 'SendAnswer'
		console.log(a);
	}, [])

	return (
		<TemplateBar>
			<Grid marginTop={8} container>
				<Grid item xs={2}></Grid>
				<Grid padding={1} item xs={6}>
					<FeedContent />
				</Grid>
				<Grid sx={{ position: 'relative' }} padding={1} item xs={4}>
					{
						(status === UNLOCKING_STATUS.LOADING)
						? <CheckingSend />
						: (status === UNLOCKING_STATUS.SEND)
							? <MessageSent />
							: <SendAnserw />
					}
					
				</Grid>
			</Grid>
		</TemplateBar>
	)
}