import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'
import axios from '../../services/axios.js';
import Input from '../Auth/Input.jsx'
export default function HackathonDomain({ID}) {
    const [Domain1, SetDomain1] = useState('')
    const [Domain2, SetDomain2] = useState('')
    const [Domain3, SetDomain3] = useState('')
    const [Domain4, SetDomain4] = useState('')

	const saveChanges = ()=>{
        axios()
        .post('hackathon/putDomains',{
			id: ID,
            domain1: Domain1,
            domain2: Domain2,
            domain3: Domain3,
            domain4: Domain4
        }).then((res)=>{
            console.log(res)
        })
    }

	return (
		<Grid container alignItems='center' justifyContent='center' >
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
							
							
									<Input name='HackathonDetails1' label='Hackathon Domains' value={Domain1} handleChange={(event) => SetDomain1(event.target.value)} half />
									<Input name='HackathonDetails2' label='Hackathon Domains' value={Domain2} handleChange={(event) => SetDomain2(event.target.value)} half />
                                    <Input name='HackathonDetails3' label='Hackathon Domains' value={Domain3} handleChange={(event) => SetDomain3(event.target.value)} half />
                                    <Input name='HackathonDetails4' label='Hackathon Domains' value={Domain4} handleChange={(event) => SetDomain4(event.target.value)} half />
							<Button sx={{ mt: 2 }}  variant='contained' color='primary' onClick={saveChanges}>
								NEXT
							</Button>
						</Grid>
					</form>
				</Paper>
				
				
			</Grid>
		</Grid>
    )
}
