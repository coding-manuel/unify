import React, { useState, useEffect } from 'react'
import { Grid, Button, Typography, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import axios from '../services/axios'

import Navbar from '../components/Navbar/Navbar'
import HackathonCard from '../components/Dashboard/HackathonCard'

const Home = () => {
	const [allHackathon, setAllHackathon] = useState([])
	const [enrolledHackathon, setEnrolledHackathon] = useState([])
	const [username, setUsername] = useState(localStorage.getItem('username'))

	useEffect(() => {
		axios()
			.post('/hackathon/getall')
			.then((res) => setAllHackathon(res.data))

		axios()
			.post('/hackathon/getuser', { username: username })
			.then((res) => setEnrolledHackathon(res.data[0].hackathon))
	}, [])
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
						{allHackathon.map((hackathon) => {
							if (enrolledHackathon.includes(hackathon.id))
								return <HackathonCard hackathon={hackathon} />
						})}
					</Grid>
					<Grid item>
						<Typography px={2} variant='h5'>
							Hackathon's Happening
						</Typography>
					</Grid>
					<Grid item container justifyContent='space-evenly'>
						{allHackathon.map((hackathon) => {
							return <HackathonCard hackathon={hackathon} />
						})}
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Home
