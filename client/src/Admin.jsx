import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import { red } from '@mui/material/colors'
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

import thumbnail from './images/uns.png'
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

	return (
		<>
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
					<DrawerHeader />

					<Typography sx={{ pt: 5 }} variant='h4' align='center'>
						Add Announcements
					</Typography>
					<Card sx={{ maxWidth: 400, maxHeight: 500, m: 10, p: 10, alignItems: 'center' }}>
						<TextField
							id='standard-basic'
							label='Heading'
							multiline
							maxRows={4}
							value={value1}
							onChange={(event) => setValue1(event.target.value)}
							variant='standard'
						/>

						<TextField
							id='standard-basic'
							label='Description'
							multiline
							maxRows={4}
							value={value3}
							onChange={(event) => setValue3(event.target.value)}
							variant='standard'
						/>
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
