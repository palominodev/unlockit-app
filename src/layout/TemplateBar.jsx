import { Grid } from "@mui/material"
import { NavBar } from "./components/NavBar"

// eslint-disable-next-line react/prop-types
export const TemplateBar = ({children}) => {
  return (
	<Grid container>
		<Grid item xs={12}>
			<NavBar />
		</Grid>
		<Grid item xs={12}>
			{children}
		</Grid>
	</Grid>
  )
}