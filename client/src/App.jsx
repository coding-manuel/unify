import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth'
import JoinHackathon from './pages/JoinHackathon'
import Dashboard from './components/Dashboard/Dashboard'
import CreateHackathon from './pages/CreateHackathon'
import Feed from './pages/Feed'
import SubmitProject from './components/submitHackathon/SubmitProject'

const App = () => {
	return (
		<div className='App'>
	
			<Routes>
			    
				<Route path='/' element={<Home />} />
				<Route path='auth' element={<Auth />} />
				<Route path='join' element={<JoinHackathon />} />
				<Route path='dash' element={<Dashboard />} />
				<Route path='createhackathon' element={<CreateHackathon />} />
				<Route path='feed' element={<Feed />} />
				<Route path='SubmitProject' element={<SubmitProject />} />
			</Routes>
		</div>
	)
}

export default App
