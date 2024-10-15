const { Users } = require('../models')
const db = require('../db')

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({})
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching users')
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) throw new Error('404 User not found');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(404).send('User not found');
  }
}

const createUser = async () => {
  const user = await Users.findOne()

}

const updateUser = async () => {
  const updatedUser = await User.findOneAndUpdate(
    {},// what you are adding to
    { $set: {} },// what are you adding
    { new: true, upsert: false } // makes sure that new document is not made
  );

  if (updatedUser) {
    console.log("User Updated:", updatedUser);
  } else {
    console.log("No User found with the given condition.")
  }
}


const deleteUser = async () => {
  let deleted = await Users.deleteOne({})//what are you deleting
  console.log("Deleted User:", deleted)
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}