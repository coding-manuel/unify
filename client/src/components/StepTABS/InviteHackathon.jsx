import React, { useState, useEffect } from 'react'
import { Button, Paper, Grid, Typography, Stack } from '@mui/material'
import axios from '../../services/axios'

export default function InviteHackathon({ ID }) {
	const [obj, setObj] = useState({})

	useEffect(() => {
		axios()
			.post('/hackathon/getdetails', { id: ID })
			.then((res) => setObj(res.data))
	}, [])

	const SelfCopy = (copyText) => {
		navigator.clipboard.writeText(copyText)
	}

	return (
		<Grid container direction='column' alignItems='center' justifyContent='center'>
			<Grid item>
				<Typography variant='h5' my={2}>
					Hackathon Information
				</Typography>
				<Typography align='center' variant='h6'>
					Hackathon Name: {obj.name}
				</Typography>
				<Typography align='center' variant='h6'>
					Date: {obj.date}
				</Typography>
				<Typography align='center' variant='h6'>
					Domain1: {obj.domain1}
				</Typography>
				<Typography align='center' variant='h6'>
					Domain2: {obj.domain2}
				</Typography>
				<Typography align='center' variant='h6'>
					Domain3: {obj.domain3}
				</Typography>
				<Typography align='center' variant='h6'>
					Domain4: {obj.domain4}
				</Typography>
				<Typography align='center' variant='h6'>
					FAQ1: {obj.FAQ1}
				</Typography>
				<Typography align='center' variant='h6'>
					FAQ2: {obj.FAQ2}
				</Typography>
				<Typography align='center' variant='h6'>
					Guidlines: {obj.guidelines}
				</Typography>
			</Grid>
			<Grid item my={4}>
				<Paper sx={{ py: 2, px: 4 }}>
					<Stack direction='row' spacing={3}>
						<Grid container direction='column' justifyContent='center' alignItems='center'>
							Invite Participants
							<Button sx={{ mt: 2 }} onClick={SelfCopy(obj.id)} variant='contained' color='primary'>
								Click to copy
							</Button>
						</Grid>
						<Grid container direction='column' justifyContent='center' alignItems='center'>
							Invite Admins
							<Button sx={{ mt: 2 }} onClick={SelfCopy(obj.id)} variant='contained' color='primary'>
								Click to copy
							</Button>
						</Grid>
					</Stack>
				</Paper>
			</Grid>
		</Grid>
	)
}
