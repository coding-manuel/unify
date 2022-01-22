import React from 'react'
import { TextField, Grid } from '@mui/material'

const Input = ({ name, value, handleChange, label, autoFocus, type, half }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				placeholder={label}
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
