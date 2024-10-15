const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const { getAllBikes, getBikeById, getBikeByType, createBike, updateBike,
deleteBike, getBikeByBrand, getAllUsers, getUserById} = require(`./models`)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/bikes', getAllBikes)
app.get('/bikes/types/:type',getBikeByType)
app.get('/bikes/brand/:Brand', getBikeByBrand)
app.get('/bikes/:id', getBikeById)
app.post('/bikes', createBike)
app.put('/bikes/:id', updateBike)
app.delete('/bikes/:id', deleteBike)
app.get('/users', getAllUsers)
app.get('/users/:id', getUserById)