import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import FeatherIcon from 'feather-icons-react'

import Input from '../components/Auth/Input'
export default function Auth() {
	const [isSignUp, setIsSignUp] = useState(true)

	const handleSubmit = () => {}
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

							<Button sx={{ mt: 2 }} type='submit' variant='contained' color='primary'>
								{isSignUp ? 'Sign Up' : 'Sign In'}
							</Button>
						</Grid>
					</form>
				</Paper>
				{isSignUp === true ? (
					<Typography variant='subtitle1'>
						Already a member? Click here to
						<Link
							onClick={() => {
								setIsSignUp(!isSignUp)
							}}
						>
							Sign In
						</Link>
					</Typography>
				) : (
					<Typography variant='subtitle1'>
						Click
						<Link
							onClick={() => {
								setIsSignUp(!isSignUp)
							}}
						>
							here
						</Link>
						to register
					</Typography>
				)}
			</Grid>
		</Grid>
	)
}
