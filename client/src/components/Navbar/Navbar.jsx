import React from 'react'
import { AppBar, Typography } from '@mui/material'

const Navbar = () => {
	const classes = useStyles()
	return (
		<div>
			<AppBar className={classes.AppBar} position='static'>
				<Typography className={classes.heading} variant='h2' align='center'>
					Basic Navbar
				</Typography>
			</AppBar>
		</div>
	)
}

export default Navbar
