import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'

import Input from '../Auth/Input.jsx'
export default function HackathonFAQS() {

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
							
							
									<Input name='HackathonGuidelines' label='Guidelines' handleChange={handleChange} half />
                                    <Input name='HackathonFAQS1' label='FAQS1' handleChange={handleChange} half />
                                    <Input name='HackathonFAQS1' label='FAQS2' handleChange={handleChange} half />
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
