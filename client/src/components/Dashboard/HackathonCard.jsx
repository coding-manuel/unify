import React from 'react'
import { styled } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import CardContent from '@mui/material/CardContent'
import { Card, CardHeader, CardMedia, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FeatherIcon from 'feather-icons-react'

<<<<<<< HEAD:client/src/components/Dashboard/HackathonCard.jsx
const HackathonCard = () => {
=======
import thumbnail from '../../images/uns.png'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
>>>>>>> aab4b743eaf777fbaaf3770ae19206246ee7dded:client/src/components/Dashboard/Dashboard.jsx
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
		<Grid item>
			<Card sx={{ minWidth: 300, maxWidth: 345, m: 2 }}>
				<CardHeader title='Unscript crce 2k22' subheader='January 22, 2022' />
				<CardMedia component='img' height='194' image={thumbnail} alt='Unscript 2022' />
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						UnScript, Fr.CRCE's annual national level hackathon has entered its 4th edition
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton aria-label='add to favorites'>
						<FeatherIcon size='16' icon='heart' />
					</IconButton>
					<IconButton aria-label='share'>
						<FeatherIcon size='16' icon='share-2' />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<FeatherIcon size='16' icon='chevron-down' />
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
		</Grid>
	)
}

export default HackathonCard
