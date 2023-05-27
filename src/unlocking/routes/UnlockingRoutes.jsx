import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { CommentPage } from "../pages/CommentPage"

export const UnlockingRoutes = () => {
  return (
	<Routes>
		<Route path="/home" element={ <HomePage /> } />
		<Route path="/comment" element={ <CommentPage /> } />
		<Route path="/*" element={ <Navigate to={'/home'} /> } />
		
	</Routes>
  )
}