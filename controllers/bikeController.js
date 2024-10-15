const Bike = require('../models/bike')


const getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find({})
    res.json(bikes)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching bikes')
  }
}


const getBikeById = async (req, res) => {
  try {
    const id = req.params.id;
    const bike = await Bike.findById(id);
    if (!bike) throw new Error('404 Bike not found');
    res.json(bike);
  } catch (error) {
    console.error(error);
    res.status(404).send('Bike not found');
  }
}

module.exports = {
  getAllBikes,
  getBikeById
}
