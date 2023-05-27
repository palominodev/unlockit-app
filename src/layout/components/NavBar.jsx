import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

const defaultURL = "https://cdn-icons-png.flaticon.com/128/149/149071.png"

export const NavBar = () => {
	const dispatch = useDispatch()
	const { displayName, photoURL } = useSelector(state => state.auth)
	const [anchorElUser, setAnchorElUser] = useState(null);


	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const onLogout = () => {
		handleCloseUserMenu()

		dispatch(startLogout())
	}

	return (
		<AppBar>
			<Container>
				<Toolbar>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src={photoURL || defaultURL} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={onLogout}>
								<Typography textAlign="center">
									Cerrar Sesion
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography marginLeft={2}>
						{displayName}
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	)
}