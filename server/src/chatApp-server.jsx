const api_key = 'vdeh8r9nqfr9'
const api_secret = 'ze63z8qujgu4x34yqcbe4thgsshhpagrjuk9f354kfkuzamv6rnyvcf79n3vga4z'
const user_id = 'alisha524'

// Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret)
// Create User Token
const token = serverClient.createToken(user_id)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

// We are using our packages here
app.use(bodyParser.json()) // to support JSON-encoded bodies

app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true,
	})
)
app.use(cors())

//You can use this to check if your server is working
app.get('/', (req, res) => {
	res.send('Welcome to your server')
})

//Route that handles login logic
app.post('/login', (req, res) => {
	console.log(req.body.username)
	console.log(req.body.password)
})

//Route that handles signup logic
app.post('/signup', (req, res) => {
	console.log(req.body.fullname)
	console.log(req.body.username)
	console.log(req.body.password)
})

//Start your server on a specified port
app.listen(port, () => {
	console.log(`Server is runing on port ${port}`)
})

var stream = require('getstream')
// Instantiate a new client (server side)
client = stream.connect(
	'vdeh8r9nqfr9',
	'ze63z8qujgu4x34yqcbe4thgsshhpagrjuk9f354kfkuzamv6rnyvcf79n3vga4z',
	'1164214'
)
// Instantiate a new client (client side)
client = stream.connect('vdeh8r9nqfr9', null, '1164214')
// Find your API keys here https://getstream.io/dashboard/
