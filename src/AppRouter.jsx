import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from "./auth/routes/AuthRoute"
import { UnlockingApp } from "./unlocking/UnlockingApp"
import { useCheckAuth } from "./hooks/useCheckAuth"
import { AUTH_STATUS } from "./types/AUTH_STATUS"
import { CheckAuth } from "./ui/CheckAuth"

export const AppRouter = () => {
	const status = useCheckAuth()

	if (status === AUTH_STATUS.CHECKING) {
		return <CheckAuth />
	}

		return (
			<Routes>
				{
					(status === AUTH_STATUS.AUTHENTICATED)
						? <Route path="/*" element={<UnlockingApp />} />

						: <Route path="/auth/*" element={<AuthRoute />} />
				}

				<Route path="/*" element={<Navigate to="/auth/login" />} />
			</Routes>
		)
}