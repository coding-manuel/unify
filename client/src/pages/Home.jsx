import React from 'react'
import { Grid, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
	return (
		<div>
			<Navbar />
			<Grid container sx={{ mt: 27 }} alignItems='center' justifyContent='space-evenly'>
				<Grid item>
					<Button
						component={RouterLink}
						to='/join'
						variant='contained'
						size='large'
						color='primary'
					>
						{' '}
						Join a Hackathon
					</Button>
				</Grid>
				<Grid Item>
					<Button variant='contained' size='large' color='primary'>
						{' '}
						Create a Hackathon
					</Button>
				</Grid>
			</Grid>
		</div>
	)
}

export default Home
