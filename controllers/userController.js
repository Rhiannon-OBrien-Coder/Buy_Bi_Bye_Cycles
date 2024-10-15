const User = require('../models/User')


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching users')
  }
}


const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) throw new Error('404 User not found');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(404).send('User not found');
  }
}

module.exports = {
  getAllUsers,
  getUserById
}