const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const { getAllBikes, getBikeById} = require(`./controllers/bikeController`)
const { getAllUsers, getUserById} = require(`./controllers/userController`)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/bikes', getAllBikes)
app.get('/bikes/:id', getBikeById)

app.get('/users', getAllUsers)
app.get('/users/:id', getUserById)