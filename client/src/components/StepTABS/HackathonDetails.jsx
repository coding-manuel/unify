import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'

import Input from '../Auth/Input.jsx'
export default function hackathonDetails() {

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
							spacing={2}
						>
							<Grid item xs={12}>
								
							</Grid>
							
							
									<Input name='HackathonName' label='Hackathon Name' handleChange={handleChange} half />
									<Input name='Date' type='date' label='Date' handleChange={handleChange} half />
							        <Input name='Time' label='Start time' handleChange={handleChange} type='time' />
                                    <Input name='Time' label='End time' handleChange={handleChange} type='time' />
						

							<Button sx={{ mt: 2 }} type='submit' variant='contained' color='primary'>
								NEXT
							</Button>
						</Grid>
					</form>
				</Paper>
				
				
			</Grid>
		</Grid>
    )
}
