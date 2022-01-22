import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'
import axios from '../services/axios'

import Input from '../components/Auth/Input'
export default function Auth() {
	const [isSignUp, setIsSignUp] = useState(true)

	const handleSubmit = () => {}
	const handleChange = () => {}
	return (
		<Grid container alignItems='center' justifyContent='center' sx={{ height: '100vh' }}>
			<Grid item>
				<Paper sx={{ p: 4 }}>
					<form>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={2}
						>
							<Grid item xs={12}>
								<Typography variant='h5' align='center'>
									{isSignUp ? 'Sign Up' : 'Sign In'}
								</Typography>
							</Grid>
							<Grid item>
								<FeatherIcon icon='lock' />
							</Grid>
							{isSignUp && (
								<>
									<Input name='firstName' label='First Name' handleChange={handleChange} half />
									<Input name='firstName' label='Last Name' handleChange={handleChange} half />
								</>
							)}
							<Input name='email' label='Email Address' handleChange={handleChange} type='email' />
							<Input
								name='password'
								label='Password'
								handleChange={handleChange}
								type='passoword'
							/>
							{isSignUp && (
								<Input
									name='confirmPassword'
									label='Repeat Password'
									handleChange={handleChange}
									type='password'
								/>
							)}

							<Button sx={{ mt: 4 }} type='submit' variant='contained' color='primary'>
								{isSignUp ? 'Sign Up' : 'Sign In'}
							</Button>
						</Grid>
					</form>
				</Paper>
				{isSignUp === true ? (
					<Typography py={1} variant='subtitle1'>
						Already a member?
						<Link
							sx={{ px: '4px', cursor: 'pointer' }}
							underline='hover'
							onClick={() => {
								setIsSignUp(!isSignUp)
							}}
						>
							Sign In
						</Link>
					</Typography>
				) : (
					<Typography py={1} variant='subtitle1'>
						Not a member?
						<Link
							sx={{ px: '4px', cursor: 'pointer' }}
							underline='hover'
							onClick={() => {
								setIsSignUp(!isSignUp)
							}}
						>
							Sign up
						</Link>
					</Typography>
				)}
			</Grid>
		</Grid>
	)
}
