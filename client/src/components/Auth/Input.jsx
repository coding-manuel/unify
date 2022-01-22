import React from 'react'
import { TextField, Grid } from '@mui/material'

const Input = ({ name, handleChange, value, label, autoFocus, type, half }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				placeholder={label}
				sx={name === 'password' ? { visibility: 'visible' } : null}
				variant='outlined'
				size='small'
				value={value}
				onChange={handleChange}
				autoFocus={autoFocus}
				required
				type={type}
			/>
		</Grid>
	)
}

export default Input
