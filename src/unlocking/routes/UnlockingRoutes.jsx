import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"

export const UnlockingRoutes = () => {
  return (
	<Routes>
		<Route path="/home" element={ <HomePage /> } />
		<Route path="/comments" element={ <h1>View 2</h1> } />
		<Route path="/*" element={ <Navigate to={'/home'} /> } />
		
	</Routes>
  )
}