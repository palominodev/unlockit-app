import { Route, Routes } from "react-router-dom"
import { AuthRoute } from "./auth/routes/AuthRoute"
import { UnlockingApp } from "./unlocking/UnlockingApp"

export const AppRouter = () => {
  return (
	<Routes>
		<Route path="/auth/*" element={ <AuthRoute /> } />
		<Route path="/*" element={ <UnlockingApp /> } />
	</Routes>
  )
}