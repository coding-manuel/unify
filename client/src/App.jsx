import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './components/Auth/Auth'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='auth' element={<Auth />} />
			</Routes>
		</div>
	)
}

export default App
