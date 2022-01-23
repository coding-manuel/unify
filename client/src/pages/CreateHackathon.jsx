import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Stack, TextField, Container } from '@mui/material'

import HackathonDetails from '../components/StepTABS/HackathonDetails'
import HackathonDomain from '../components/StepTABS/HackathonDomain'
import HackathonFAQS from '../components/StepTABS/HackathonFAQS.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import axios from '../services/axios'
import InviteHackathon from '../components/StepTABS/InviteHackathon.jsx'

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

export default function CreateHackathon() {
	const [value, setValue] = React.useState(0)
	const [Name, setName] = React.useState('')
	const [ID, setID] = React.useState('')

	const saveName = async (event) => {
		axios()
			.post('/hackathon/createhackathon', {
				name: event.target.value,
			})
			.then((res) => {
				console.log(res)
				setID(res.data.id)
			})
	}

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<Navbar />
			<Container maxWidth='lg'>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
						<Tab label='Details' {...a11yProps(0)} />
						<Tab label='Domains' {...a11yProps(1)} />
						<Tab label='Guidelines' {...a11yProps(2)} />
						<Tab label='Completed' {...a11yProps(3)} />
					</Tabs>
				</Box>
				<Stack spacing={2} py={2} direction='column' alignItems='center'>
					<TextField
						name='hackathonName'
						placeholder='Hackathon Name'
						variant='outlined'
						size='small'
						value={Name}
						onChange={(event) => setName(event.target.value)}
						onBlur={(event) => saveName(event)}
						autoFocus
					/>
					<TabPanel value={value} index={0}>
						<HackathonDetails ID={ID} />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<HackathonDomain ID={ID} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<HackathonFAQS ID={ID} />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<InviteHackathon ID={ID} />
					</TabPanel>
				</Stack>
			</Container>
		</>
	)
}
