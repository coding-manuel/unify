import React from 'react'
import { Grid, Typography, Button } from '@mui/material'

import Input from './components/Auth/Input'

const Joinhackathon = () => {
	return (
		<form>
			<Grid
				container
				spacing={2}
				direction='column'
				justifyItems='space-evenly'
				alignItems='center'
				sx={{ m: 4 }}
			>
				<Grid item>
					<Typography variant='h4'>Enter Hackathon code</Typography>
				</Grid>
				<Grid item>
					<Input name='code' label='Hackathon Code' />
				</Grid>
				<Grid item>
					<Button type='submit' variant='contained'>
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}

export default Joinhackathon
