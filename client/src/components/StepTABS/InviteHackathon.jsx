import React, { useState, useEffect } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import axios from '../../services/axios'

export default function InviteHackathon({ ID }) {
	const handleSubmit = () => {
		e.preventDefault()
	}

	useEffect(() => {
		axios()
			.get('/hackathon/getDetails', { id: ID })
			.then((res) => console.log(res))
	})

	const handleChange = () => {}
	return (
		<Grid container alignItems='center' justifyContent='center'>
			<Grid item>
				<Paper sx={{ p: 2 }}>
					<form>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={1}
						>
							Invite
							<Button sx={{ mt: 2 }} type='submit' variant='contained' color='primary'>
								Complete
							</Button>
						</Grid>
					</form>
				</Paper>
			</Grid>
		</Grid>
	)
}
