const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const bikeController = require(`./controllers/bikeController`)
const userController = require(`./controllers/userController`)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/bikes', bikeController.getAllBikes)

app.get('/bikes/types/:type', bikeController.getBikeByType)
app.get('/bikes/brands/:brand', bikeController.getBikeByBrand)
app.get('/bikes/:id', bikeController.getBikeById)
app.post('/bikes', bikeController.createBike)
app.put('/bikes/:id', bikeController.updateBike)
app.delete('/bikes/:id', bikeController.deleteBike)

app.get('/users', userController.getAllUsers)
app.get('/users/:email', userController.getUserByEmail)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})