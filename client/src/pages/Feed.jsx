import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
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

import thumbnail from '../images/uns.png'
import ChatApp from '../components/Chatapp/ChatApp'
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

const Feed = () => {
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
							This Hackathon
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
					<ChatApp />
				</Drawer>
				<Main open={open}>
					<DrawerHeader />

					<Typography sx={{ pt: 5 }} variant='h4' align='center'>
						Announcements
					</Typography>
					<Card sx={{ maxWidth: 500, m: 10 }}>
						<CardHeader
							avatar={
								<Avatar sx={{ bgcolor: red[500] }} aria-label='unscript'>
									U
								</Avatar>
							}
							action={
								<IconButton aria-label='settings'>
									<FeatherIcon icon='more-vertical' />
								</IconButton>
							}
							title='Unscript crce 2k22'
							subheader='January 22, 2022'
						/>
						<CardMedia component='img' height='194' image={thumbnail} alt='Unscript 2022' />
						<CardContent>
							<Typography variant='body2' color='text.secondary'>
								UnScript, Fr.CRCE's annual national level hackathon has entered its 4th edition
							</Typography>
						</CardContent>
						<CardActions>
							<IconButton aria-label='add to favorites'>
								<FeatherIcon icon='heart' />
							</IconButton>
							<IconButton aria-label='share'>
								<FeatherIcon icon='share-2' />
							</IconButton>
							<ExpandMore
								expand={expanded}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'
							>
								<FeatherIcon icon='chevron-down' />
							</ExpandMore>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography paragraph>About:</Typography>
								<Typography paragraph>24 hrs 4 domains 50+ Teams</Typography>
								<Typography paragraph>
									UnScript wishes in bringing opportunities to all coders to have a hands-on
									experience on various domains and bring the best out of them. Register now!
								</Typography>
							</CardContent>
						</Collapse>
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
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<FeatherIcon icon='chevron-down' />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<FeatherIcon icon='chevron-down' />}
					aria-controls='panel3a-content'
					id='panel3a-header'
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	)
}

export default Feed
