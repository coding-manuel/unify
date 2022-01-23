import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Typography, Grid, Box, Button, Link, Container } from '@mui/material'

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
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<Navbar />
			<Container maxWidth='lg'>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label='join tab'>
						<Tab label='Step 1' {...a11yProps(0)} />
						<Tab label='Step 2' {...a11yProps(1)} />
						<Tab label='Step 3' {...a11yProps(2)} />
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
								<Input name='code' label='Hackathon Code' />
							</Grid>
							<Grid item>
								<Button type='submit' variant='contained'>
									Submit
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
								<Input name='username' label='@username' />
							</Grid>
							<Grid item>
								<Button type='submit' variant='contained'>
									Submit
								</Button>
							</Grid>
							<Typography my={2} variant='subtitle1'>
								Dont have a team yet? <Link variant='subtitle2'>Click here</Link>
							</Typography>
						</Grid>
					</form>
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</Container>
		</>
	)
}
