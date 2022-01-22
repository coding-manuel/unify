import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'

import Input from '../Auth/Input.jsx'
export default function hackathonDetails() {
    const [Name, SetName] = useState('')
    const [Date, SetDate] = useState()
    const [sTime, SetsTime] = useState()
    const [eTime, SeteTime] = useState()

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
							
							
									<Input name='HackathonName' label='Hackathon Name' value={Name} handleChange={(event) => SetName(event.target.value)} half />
									<Input name='Date' type='date' label='Date' value={Date} handleChange={(event) => SetDate(event.target.value)} half />
							        <Input name='Time' label='Start time' value={sTime} handleChange={(event) => SetsTime(event.target.value)} type='time' />
                                    <Input name='Time' label='End time' value={eTime} handleChange={(event) => SeteTime(event.target.value)} type='time' />
						

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
