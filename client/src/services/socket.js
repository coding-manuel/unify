import socket from 'socket.io-client'
import { SOCKET_URL } from './config'

const io = socket(SOCKET_URL, {
	reconnectionDelay: 5000,
})

export { io }
