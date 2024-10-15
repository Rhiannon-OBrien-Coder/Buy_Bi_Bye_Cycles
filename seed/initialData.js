const db = require(`../db`)
const {Bikes, Users} = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
    const bikeList = [
        {
          name: 'Road Bike 1',
          price: 1200,
          type: 'Road',
          brand: 'Specialized',
          description: 'Designed for speed and efficiency on smooth tarmac roads. Perfect for racing and long-distance rides.',
          image: 'road-bike-1.jpg'
        },
        {
          name: 'Mountain Bike 1',
          price: 1500,
          type: 'Mountain',
          brand: 'Specialized',
          description: 'Tough and ready for rough terrain. Comes with front and rear suspension for tackling steep ascents and descents.',
          image: 'mountain-bike-1.jpg'
        },
        {
          name: 'Hybrid Commuter Bike 1',
          price: 800,
          type: 'Hybrid',
          brand: 'Specilized',
          description: 'An all-around bike great for urban commuting and leisure rides, offering a blend of speed and comfort.',
          image: 'hybrid-bike-1.jpg'
        },
        {
          name: 'Touring Bike 1',
          price: 1300,
          type: 'Touring',
          brand: 'Specialized',
          description: 'Ideal for long-distance touring, built to carry heavy loads while remaining comfortable over long distances.',
          image: 'touring-bike-1.jpg'
        },
        {
          name: 'Folding Bike 1',
          price: 900,
          type: 'Folding',
          brand: 'Specialized',
          description: 'A convenient bike that folds up easily for transport or storage, great for urban commuters and leisure riders.',
          image: 'folding-bike-1.jpg'
        },
        {
          name: 'BMX Bike 1',
          price: 600,
          type: 'BMX',
          brand: 'Specialized',
          description: 'A bike built for tricks, stunts, and racing in BMX competitions. Durable and ready for extreme use.',
          image: 'bmx-bike-1.jpg'
        },
        {
          name: 'Kids Bike 1',
          price: 400,
          type: 'Kids',
          brand: 'Specialized',
          description: 'A safe and fun bike designed for children, perfect for learning to ride and exploring the outdoors.',
          image: 'kids-bike-1.jpg'
        }
      ]
        const users= [
    {
        name: 'username1',
        address: '123 fake street',
        email: 'fakeemail.com',
        phoneNumber: 5555555555
    },
    {
        name: 'username2',
        address: '124 fake street',
        email: 'fakeemail.com',
        phoneNumber: 5555555556
    },
    {
        name: 'username3',
        address: '125 fake street',
        email: 'fakeemail.com',
        phoneNumber: 5555555557
    },]
      await Bikes.insertMany(bikeList)
      console.log('Bikes Saved')

      await Users.insertMany(users)
  console.log("Created some users!")
    }
const run = async () => {
    await main()
    db.close()
}

run()