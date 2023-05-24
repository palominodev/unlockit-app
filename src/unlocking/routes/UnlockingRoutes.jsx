import { Navigate, Route, Routes } from "react-router-dom"

export const UnlockingRoutes = () => {
  return (
	<Routes>
		<Route path="/home" element={ <h1>View 1</h1> } />
		<Route path="/comments" element={ <h1>View 2</h1> } />
		<Route path="/*" element={ <Navigate to={'/home'} /> } />
		
	</Routes>
  )
}