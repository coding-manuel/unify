import React from 'react'
import { TextField, Grid } from '@mui/material'

const Input = ({ name, handleChange, label, autoFocus, type, half }) => {
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
			/>
		</Grid>
	)
}

export default Input
