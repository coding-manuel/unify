import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import Input from '../Auth/Input'
import Navbar from '../Navbar/Navbar'
import axios from '../../services/axios.js'

export default function SubmitProject() {
	const [HackID, SetHackID] = useState('')
	const [SubmitProj, SetsubmitProj] = useState('')
	const [TeamID, SetTeamID] = useState('')
	const saveChanges = () => {
		axios()
			.post('submit/submitDetails', {
				hackID: HackID,
				teamID: TeamID,
				SubmitProj: SubmitProj,
			})
			.then((res) => {
				console.log(res)
			})
	}
	return (
		<>
			<Navbar />

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
								<Input
									name='HackathonID'
									label='Hackathon ID'
									value={HackID}
									handleChange={(event) => SetHackID(event.target.value)}
								/>
								<Input
									name='teamName'
									label='your Team Name'
									value={TeamID}
									handleChange={(event) => SetTeamID(event.target.value)}
								/>
								<Input
									name='submitProj'
									label='Submit Github Repo Link'
									value={SubmitProj}
									handleChange={(event) => SetsubmitProj(event.target.value)}
								/>

								<Button sx={{ mt: 2 }} variant='contained' color='primary' onClick={saveChanges}>
									Submit
								</Button>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}
