import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth'
import JoinHackathon from './pages/JoinHackathon'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='auth' element={<Auth />} />
				{/* <Route path='join' element={<JoinHackathon />} /> */}
				<Route path='createHackathon' element={<BasicTabs />} />
			</Routes>
		</div>
	)
}

export default App
