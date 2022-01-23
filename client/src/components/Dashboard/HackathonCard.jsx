import React from 'react'
import { styled } from '@mui/material/styles'
import { Navigate, useNavigate } from 'react-router-dom'
import CardContent from '@mui/material/CardContent'
import { Card, CardHeader, CardMedia, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FeatherIcon from 'feather-icons-react'
import thumbnail from '../../images/uns.png'

const HackathonCard = ({ hackathon }) => {
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

	const navigate = useNavigate()
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const takefeed = () => {
		navigate('/feed')
	}

	return (
		<Grid item sx={{ cursor: 'pointer' }} onClick={takefeed}>
			<Card sx={{ minWidth: 300, maxWidth: 345, m: 2 }}>
				<CardHeader title={hackathon.name} subheader={hackathon.date} />
				<CardMedia component='img' height='194' image={thumbnail} alt='Unscript 2022' />
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{hackathon.guidelines}
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
						<Typography paragraph>Time: {hackathon.time}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Grid>
	)
}

export default HackathonCard
