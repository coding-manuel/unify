const connectSocket = async (http, BASE_URL) => {
	const io = require('socket.io')(http, {
		cors: {
			origin: BASE_URL,
			credentials: true,
		},
	})

	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	function generateString(length) {
		let result = ' '
		const charactersLength = characters.length
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
		}

		return result
	}

	io.on('connection', function (socket) {
		console.log('hello')
	})
}

module.exports = connectSocket
