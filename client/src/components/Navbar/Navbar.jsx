import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<FeatherIcon icon='loader' style={{ margin: '0 6px' }} />
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Unify
				</Typography>
				<FeatherIcon icon='user' />
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
