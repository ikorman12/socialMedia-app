const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router
.route('/')
//get all users
.get(getUsers)
//create a user
.post(createUser);

// /api/users/:userId
router
.route('/:userId')
//GET single User
.get(getSingleUser)
//DELETE single user
.delete(deleteUser)
//PUT/update user
.put(updateUser);

router.route('/:userId/friends/friendId')
//add a friend
.post(addFriend)
//delete friend
.delete(removeFriend)

module.exports = router;
