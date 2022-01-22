import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


  
import Input from '../Auth/Input.jsx'
import axios from '../../services/axios.js';
export default function hackathonDetails({ID}) {
    const [Date, SetDate] = useState()
    const [Time, setTime] = React.useState('');

    const saveChanges = ()=>{
        axios()
        .post('hackathon/putdetails',{
            id: ID,
            date: Date,
            time: Time
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
									<Input name='Date' type='date' label='Date' value={Date} handleChange={(event) => SetDate(event.target.value)} half />
                                    <Grid item xs={12}>
                                    <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Hack Hours</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={Time}
                                        label="Time"
                                        onChange={(event)=>{setTime(event.target.value)}}
                                        >
                                        <MenuItem value={24}>24 hour</MenuItem>
                                        <MenuItem value={48}>48 hour</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Box>
                                    </Grid>
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
