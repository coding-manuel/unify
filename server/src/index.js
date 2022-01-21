const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const connectDB = require('./config/db.js')
const BASE_URL = require('./config/keys')

const routes = require('./routes/route')

//TODO IPORT ROUTES

require('dotenv').config()

const app = express()

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

// app.use(express.static(path.join(__dirname, "../../client/build")));

app.use('/api', routes)

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
