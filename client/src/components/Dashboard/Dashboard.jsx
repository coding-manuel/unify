import React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FeatherIcon from 'feather-icons-react'
import thumbnail from '../../images/uns.png'

import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
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
			<Navbar />

			<Grid container direction='row' alignItems='center' justifyItems='space-between'>
				<Grid item xs={5}>
					<Button variant='contained' fullWidth component={RouterLink} to='/join'>
						Join a Hackathon
					</Button>{' '}
				</Grid>
				<Grid item xs={5}>
					<Button variant='contained' fullWidth component={RouterLink} to='/create'>
						Create a Hackathon
					</Button>
				</Grid>
			</Grid>

			<Card sx={{ maxWidth: 345, m: 10 }}>
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
							UnScript wishes in bringing opportunities to all coders to have a hands-on experience
							on various domains and bring the best out of them. Register now!
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card sx={{ maxWidth: 345, m: 10 }}></Card>
			<Card sx={{ maxWidth: 345, m: 10 }}></Card>
		</>
	)
}

export default Dashboard
