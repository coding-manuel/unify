import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'


export default function InviteHackathon() {

	const handleSubmit = () => {
        e.preventDefault();
    }
	const handleChange = () => {}
	return (
		<Grid container alignItems='center' justifyContent='center' sx={{ height: '100vh' }}>
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