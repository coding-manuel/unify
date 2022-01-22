import React from 'react'
import { TextField, Grid, IconButton, InputAdornment } from '@mui/material'

const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword, half }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				placeholder={label}
				sx={name === 'password' ? { visibility: 'visible' } : null}
				variant='outlined'
				size='small'
				onChange={handleChange}
				autoFocus={autoFocus}
				required
				type={type}
				InputProps={
					name === 'password' && {
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton onClick={handleShowPassword}></IconButton>
							</InputAdornment>
						),
					}
				}
			/>
		</Grid>
	)
}

export default Input
