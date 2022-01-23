import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Typography, Grid, Box, Button, Link, Container, Snackbar, IconButton } from '@mui/material'
import FeatherIcon from 'feather-icons-react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import axios from '../services/axios'
import Input from '../components/Auth/Input'
import Navbar from '../components/Navbar/Navbar'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 2 }}>{children}</Box>}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function JoinHackathon() {
	const [value, setValue] = useState(0)
	const [hackathonCode, setHackathonCode] = useState('')
	const [hackathon, setHackathon] = useState([])
	const [openDialog, setOpenDialog] = React.useState(false)
	const [open, setOpen] = useState(false)
	const [error, setError] = useState('')
	const [username, setUsername] = useState(localStorage.getItem('username'))
	const [searchUsername, setSearchUsername] = useState('')
	const [teamID, setTeamID] = useState('')

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const findHackathon = () => {
		if (hackathonCode !== '') {
			axios()
				.post('/hackathon/getdetails', { id: hackathonCode })
				.then((res) => {
					if (res.data) {
						setHackathon(res.data)
						setOpenDialog(true)
						//team present
					} else {
						setOpen(true)
						setError('Enter Correct Hackathon ID')
					}
				})
		} else {
			setOpen(true)
			setError('Enter a Hackathon ID')
		}
	}

	const findUser = () => {
		if (searchUsername !== '') {
			axios()
				.post('/hackathon/getuser', { username: searchUsername })
				.then((res) => {
					if (res.data) {
						axios()
							.post('/hackathon/createteam', {
								hackathonID: hackathonCode,
								username: username,
							})
							.then((res) => setTeamID(res.data))
						setOpen(true)
						setError(`${res.data[0].username} has joined the team`)
					} else {
						setOpen(true)
						setError('Enter Correct username')
					}
				})
		} else {
			setOpen(true)
			setError('Enter a Hackathon ID')
		}
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpenDialog(false)
	}

	const handleClickClose = (value) => {
		if (value) {
			console.log(value)
			axios()
				.post('/hackathon/addmember', {
					username: username,
					hackathonID: hackathonCode,
					teamID: teamID,
				})
				.then((res) => {
					console.log(res)
					setOpenDialog(false)
					setOpen(true)
					setError('Sucessfully Registered')
				})
		} else {
			setOpenDialog(false)
		}
	}

	return (
		<>
			<Navbar />
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message={error}
				action={
					<React.Fragment>
						<IconButton
							aria-label='close'
							color='inherit'
							sx={{ padding: '5px', borderRadius: '6px' }}
							onClick={handleClose}
						>
							<FeatherIcon icon='x' size='16' />
						</IconButton>
					</React.Fragment>
				}
			/>

			<Dialog
				open={openDialog}
				onClose={() => handleClickClose(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>You are applyong to {hackathon.name}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>Are you sure?</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant='contained' onClick={() => handleClickClose(false)}>
						No
					</Button>
					<Button variant='contained' onClick={() => handleClickClose(true)} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>

			<Container maxWidth='lg'>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label='join tab'>
						<Tab label='Step 1' {...a11yProps(0)} />
						<Tab label='Step 2' {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<form>
						<Grid
							container
							spacing={2}
							direction='column'
							justifyItems='space-evenly'
							alignItems='center'
							my={2}
						>
							<Grid item>
								<Typography variant='h5'>Enter Hackathon code</Typography>
							</Grid>
							<Grid item>
								<Input
									value={hackathonCode}
									handleChange={(event) => setHackathonCode(event.target.value)}
									name='code'
									label='Hackathon Code'
								/>
							</Grid>
							<Grid item>
								<Button variant='contained' onClick={findHackathon}>
									Find
								</Button>
							</Grid>
						</Grid>
					</form>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<form>
						<Grid
							container
							spacing={2}
							direction='column'
							justifyItems='space-evenly'
							alignItems='center'
							my={2}
						>
							<Grid item>
								<Typography variant='h5'>Add Team Members</Typography>
							</Grid>
							<Grid item>
								<Input
									name='username'
									value={searchUsername}
									handleChange={(event) => setSearchUsername(event.target.value)}
									label='@username'
								/>
							</Grid>
							<Grid item>
								<Button onClick={findUser} variant='contained'>
									Find
								</Button>
							</Grid>
							<Typography my={2} variant='subtitle1'>
								Dont have a team yet? <Link variant='subtitle2'>Click here</Link>
							</Typography>
						</Grid>
					</form>
				</TabPanel>
			</Container>
		</>
	)
}
