import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'

import Input from '../Auth/Input.jsx'
export default function HackathonFAQS() {
    const [Guideline, SetGuideline] = useState('')
    const [FAQ1, SetFaq1] = useState('')
    const [FAQ2, SetFaq2] = useState('')
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
							
							
									<Input name='HackathonGuidelines' label='Guidelines' value={Guideline} handleChange={(event) => SetGuideline(event.target.value)} half />
                                    <Input name='HackathonFAQS1' label='FAQS1' value={FAQ1} handleChange={(event) => SetFaq1(event.target.value)} half />
                                    <Input name='HackathonFAQS1' label='FAQS2' value={FAQ2} handleChange={(event) => SetFaq2(event.target.value)} half />
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
