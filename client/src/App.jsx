import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import JoinHackathon from './pages/JoinHackathon'
import CreateHackathon from './pages/CreateHackathon'
import Feed from './pages/Feed'
import SubmitProject from './components/submitHackathon/SubmitProject'
import ChatApp from './components/Chatapp/ChatApp'
import Admin from './Admin'
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
				<Route path='chat' element={<ChatApp />} />
				<Route path='admin' element={<Admin />} />
			</Routes>
		</div>
	)
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				localStorage.getItem('user') ? (
// 					<Component {...rest} {...props} />
// 				) : (
// 					<Navigate to={{ pathname: '/auth' }} />
// 				)
// 			}
// 		/>
// 	)
// }

export default App
