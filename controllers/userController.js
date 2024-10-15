const User = require('../models/user')


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

const allUsers = async () => {
  const users = await User.find()
  console.log('All Users:', users)
}

const findUsers = async () => {
  const user = await User.findOne()
  console.log("User Found:", )
}


const createUser = async () => {
  const user = await User.findOne()

}


const updateUser = async () => {
  const updatedUser = await User.findOneAndUpdate(
    {  },// what you are adding to
    { $set: {  } },// what are you adding
    { new: true, upsert: false } // makes sure that new document is not made
  );

  if (updatedUser) {
    console.log("User Updated:", updatedUser);
  } else {
    console.log("No User found with the given condition.")
  }
}


const deleteUser = async () => {
  let deleted = await User.deleteOne({})//what are you deleting
  console.log("Deleted User:", deleted)
}


async function main() {
  try {
    
    // await findUser()
    // await createUser()
    // await createUser()
    // await updateUser()
    // await deleteUser()
  } catch (error) {
    console.log("Error:", error)
  } finally {
    await db.close()
  }
}

main()