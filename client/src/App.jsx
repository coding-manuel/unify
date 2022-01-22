import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import JoinHackathon from './pages/JoinHackathon'
import CreateHackathon from './pages/CreateHackathon'
import Feed from './pages/Feed'
import ChatApp from './components/Chatapp/ChatApp'
const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='auth' element={<Auth />} />
				<Route path='join' element={<JoinHackathon />} />
				<Route path='dash' element={<Dashboard />} />
				<Route path='createhackathon' element={<CreateHackathon />} />
				<Route path='feed' element={<Feed />} />
				<Route path='chat' element={<ChatApp />} />
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
