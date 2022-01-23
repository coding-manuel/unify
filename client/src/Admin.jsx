import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FeatherIcon from 'feather-icons-react'
import Paper from '@mui/material/Paper'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { Button, OutlinedInput, Stack } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import axios from './services/axios'

const drawerWidth = 250

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 1,
		}),
	})
)

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))
const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}))

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}))

const Admin = () => {
	const [value1, setValue1] = React.useState(' ')
	const [value3, setValue3] = React.useState(' ')
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)
	const [openDialog, setOpenDialog] = useState(false)
	const [projects, setProjects] = useState([])

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}
	const ExpandMore = styled((props) => {
		const { expand, ...other } = props
		return <IconButton {...other} />
	})(({ theme, expand }) => ({
		transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	}))
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	useEffect(() => {
		axios()
			.post('submit/getDetails')
			.then((res) => {
				console.log(res.data)
				setProjects(res.data)
			})
	}, [])

	const handleClickClose = () => {
		setOpenDialog(false)
	}
	return (
		<>
			<Dialog
				open={openDialog}
				onClose={handleClickClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Projects</DialogTitle>
				<DialogContent>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 300 }} size='small' aria-label='a dense table'>
							<TableHead>
								<TableRow>
									<TableCell>TeamID</TableCell>
									<TableCell align='right'>Project Link</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{projects.map((project) => (
									<TableRow>
										<TableCell component='th' scope='row'>
											{project.teamid}
										</TableCell>
										<TableCell align='right'>{project.submitProj}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</DialogContent>
			</Dialog>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position='fixed' open={open}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							sx={{ mr: 2, ...(open && { display: 'none' }) }}
						>
							<FeatherIcon icon={open ? 'chevrons-left' : 'chevrons-right'} />
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							My Hackathon
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
						},
					}}
					variant='persistent'
					anchor='left'
					open={open}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							<FeatherIcon icon={open ? 'chevrons-left' : 'chevrons-right'} />
						</IconButton>
					</DrawerHeader>
					<Divider />
				</Drawer>
				<Main open={open}>
					<Button
						onClick={() => setOpenDialog(true)}
						fullWidth
						size='large'
						sx={{ mt: 7, mb: 3 }}
						my={2}
						variant='contained'
					>
						Browse Projects
					</Button>
					<Typography variant='h4' align='center'>
						Announcements
					</Typography>
					<Card
						sx={{ maxWidth: '100%', maxHeight: 500, mt: 2, px: 2, py: 4, alignItems: 'center' }}
					>
						<Stack direction='column' spacing={1} sx={{ mr: 20 }}>
							<Typography variant='h5'>Create new post</Typography>
							<OutlinedInput size='small' placeholder='Header' variant='h5' />
							<OutlinedInput size='small' placeholder='Header' variant='h5' />
						</Stack>
					</Card>
					<Card
						sx={{ maxWidth: '100%', maxHeight: 500, mt: 2, px: 2, py: 4, alignItems: 'center' }}
					>
						<Typography variant='h5'>The hackathon timing updates</Typography>
						<Typography variant='subtitle1'>
							The hackathon will start from 11:00 AM in morning
						</Typography>
					</Card>
					<Card
						sx={{ maxWidth: '100%', maxHeight: 500, mt: 2, px: 2, py: 4, alignItems: 'center' }}
					>
						<Typography variant='h5'>The hackathon winning perks</Typography>
						<Typography variant='subtitle1'>
							Access to Wolfram | One for thirty days | One includes both Desktop and Cloud access,
							full access to the Wolfram Language and Knowledgebase, Free CDF deployment, 5000
							Wolfram | Alpha API calls, 5000 Cloud Credits, 2 installations per user and 2 GB of
							Cloud Storage. 2️⃣ Balsamiq Cloud 90-day extended trial period 3️⃣ GeeksforGeeks
							provides INR 300 discount coupons for all the participants in the hackathon 4️⃣ 5 year
							free upgrades by Taskade 5️⃣ No Escape Voucher of INR 1000 towards the escape game 6️⃣ 1
							Free Year of 1Password Families 7️⃣ 60 day free trial by Digital Ocean 8️⃣ Ciphers
							Schools Early Access to upcoming product 9️⃣ echo 3D offers their services as a free
							perk for all the participants
						</Typography>
					</Card>
					<Card
						sx={{ maxWidth: '100%', maxHeight: 500, mt: 2, px: 2, py: 4, alignItems: 'center' }}
					>
						<Typography variant='h5'>The hackathon Problem statement</Typography>
						<Typography variant='subtitle1'>
							Domain : Web / Mobile Development Problem Name : Build a hackathon management platform
							for ensuring smooth communication between organizing teams and participating teams.
							Description : This year’s Unscript Hackathon took its registrations through Devfolio
							and the whole one-on-one communication with the teams was done through Gmail. All the
							teams are hosted on our Discord server currently and any form of formal communication
							with the teams through the hackathon is done through Google Meet. Any sort of
							complaints are dealt with through Discord team channels and the final submissions
							would be reviewed through each team’s Github repository links. Sounds too complicated,
							right? This looks like a problem waiting to be solved. The goal of this problem
							statement is to create a one-stop seamless platform to host all activities required to
							organize a successful hackathon. API integrations can also be made use of. For this
							problem statement, we strongly encourage you to rack your brains and include any
							creative features that you feel will set your product apart.
						</Typography>
					</Card>
				</Main>
			</Box>
			<Typography variant='h4' align='center' sx={{ m: 4 }}>
				FAQ's
			</Typography>
			<Accordion>
				<AccordionSummary
					expandIcon={<FeatherIcon icon='chevron-down' />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography>Q. What is a Hackathon?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						A hackathon is an event where in participating teams are provided different real-life
						problems and they have to design a technological solution to anyone of the problems
						given in the given time limit. The final product developed should be usable in real
						life.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<FeatherIcon icon='chevron-down' />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Q. Can I code before coming to the hackathon?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						You can come prepared with half baked codes, write your own APIs and modules.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<FeatherIcon icon='chevron-down' />}
					aria-controls='panel3a-content'
					id='panel3a-header'
				>
					<Typography>Q. Who can participate in the hackathon?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Students currently enrolled in a 3 or 4 year technical course can participate in the
						event.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	)
}

export default Admin
