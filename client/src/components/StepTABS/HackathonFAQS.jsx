import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import axios from '../../services/axios.js';

import Input from '../Auth/Input.jsx'
export default function HackathonFAQS({ID}) {
    const [Guideline, SetGuideline] = useState('')
    const [FAQ1, SetFaq1] = useState('')
    const [FAQ2, SetFaq2] = useState('')
	

	const saveChanges = ()=>{
        axios()
        .post('hackathon/putFAQS',{
			id: ID,
            guideline: Guideline,
            FAQ1: FAQ1,
            FAQ2: FAQ2,
        }).then((res)=>{
            console.log(res)
        })
    }
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
							spacing={2}
						>
							<Grid item xs={12}>
								
							</Grid>
							
							
									<Input name='HackathonGuidelines' label='Guidelines' value={Guideline} handleChange={(event) => SetGuideline(event.target.value)} half />
                                    <Input name='HackathonFAQS1' label='FAQS1' value={FAQ1} handleChange={(event) => SetFaq1(event.target.value)} half />
                                    <Input name='HackathonFAQS1' label='FAQS2' value={FAQ2} handleChange={(event) => SetFaq2(event.target.value)} half />
							<Button sx={{ mt: 2 }} variant='contained' color='primary' onClick={saveChanges}>
								NEXT
							</Button>
						</Grid>
					</form>
				</Paper>
				
				
			</Grid>
		</Grid>
	)
}
