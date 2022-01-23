const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db.js')
const connectSocket = require('./socket')
const BASE_URL = require('./config/keys')

const authRoutes = require('./routes/authRoutes')
const hackathonRoutes = require("./routes/hackathonRoutes")
const submitRoutes = require("./routes/submitRoutes")
//TODO IPORT ROUTES

require('dotenv').config()

const app = express()
const http = require('http').createServer(app)

connectSocket(http, BASE_URL)
connectDB() //Connect Database

const PORT = process.env.PORT || 8080

//* ----------------------------------------------------------------------- Middwares

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('common'))

app.use(
	cors({
		origin: BASE_URL,
		credentials: true,
	})
)

app.use(
	session({
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI,
		}),
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
	})
)

app.use(cookieParser(process.env.SESSION_SECRET))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passportConfig')(passport)

// app.use(express.static(path.join(__dirname, "../../client/build")));

app.use('/api/auth', authRoutes)
app.use('/api/hackathon', hackathonRoutes)
app.use('/api/submit', submitRoutes)

// app.get("*", function (req, res) {
// 	res.sendFile("index.html", {
// 		root: path.join(__dirname, "../../client/build/"),
// 	});
// });

const middlewares = require('./middlewares')
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

app.listen(PORT, () => {
	console.log(`Listening at PORT: ${PORT}`)
})
