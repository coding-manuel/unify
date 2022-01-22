import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import Input from '../Auth/Input'

export default function SubmitProject() {

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
							
						<Input name='submitProj' label='submit your github Repo Link'/>

							<Button sx={{ mt: 2 }} type='submit' variant='contained' color='primary'>
								Submit
							</Button>
						</Grid>
					</form>
				</Paper>
				
				
			</Grid>
		</Grid>
    )
}
