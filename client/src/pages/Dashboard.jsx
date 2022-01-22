import React from 'react'
import { Grid, Button, Typography, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import HackathonCard from '../components/Dashboard/HackathonCard'

const Home = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='lg'>
				<Grid container spacing={2} direction='column'>
					<Grid item container sx={{ my: 4 }} alignItems='center' justifyContent='space-evenly'>
						<Grid item>
							<Button
								component={RouterLink}
								to='/join'
								variant='contained'
								size='large'
								color='primary'
							>
								Join a Hackathon
							</Button>
						</Grid>
						<Grid Item>
							<Button
								component={RouterLink}
								to='/createhackathon'
								variant='contained'
								size='large'
								color='primary'
							>
								Create a Hackathon
							</Button>
						</Grid>
					</Grid>
					<Grid item>
						<Typography px={2} variant='h5'>
							Hackathon's Enrolled
						</Typography>
					</Grid>
					<Grid item container justifyContent='space-evenly'>
						<HackathonCard />
						<HackathonCard />
						<HackathonCard />
					</Grid>
					<Grid item>
						<Typography px={2} variant='h5'>
							Hackathon's Happening
						</Typography>
					</Grid>
					<Grid item container justifyContent='space-evenly'>
						<HackathonCard />
						<HackathonCard />
						<HackathonCard />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Home
