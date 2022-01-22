import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Typography, Grid, Box, Button, Link } from '@mui/material'

import Input from './components/Auth/Input'

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
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
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
		<Box sx={{ width: '100%' }}>
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
						sx={{ m: 4 }}
					>
						<Grid item>
							<Typography variant='h4'>Enter Hackathon code</Typography>
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
						sx={{ m: 4 }}
					>
						<Grid item>
							<Typography variant='h4'>Add Team Members</Typography>
						</Grid>
						<Grid item>
							<Input name='username' label='@username' />
						</Grid>
						<Grid item>
							<Button type='submit' variant='contained'>
								Submit
							</Button>
						</Grid>
						<Typography variant='subtitle'>
							Dont have a team yet? Click <Link>here</Link> to let us help you{' '}
						</Typography>
					</Grid>
				</form>
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</Box>
	)
}

// const Joinhackathon = () => {
// 	return (
// 		<form>
// 			<Grid
// 				container
// 				spacing={2}
// 				direction='column'
// 				justifyItems='space-evenly'
// 				alignItems='center'
// 				sx={{ m: 4 }}
// 			>
// 				<Grid item>
// 					<Typography variant='h4'>Enter Hackathon code</Typography>
// 				</Grid>
// 				<Grid item>
// 					<Input name='code' label='Hackathon Code' />
// 				</Grid>
// 				<Grid item>
// 					<Button type='submit' variant='contained'>
// 						Submit
// 					</Button>
// 				</Grid>
// 			</Grid>
// 		</form>
// 	)
// }

// export default Joinhackathon
