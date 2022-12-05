const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //Update a user
  updateUser(req,res) {
    User.findOneAndUpdate(
    {_id:req.parames.userId},
    {$set:req.body},
    {runValidators:true,
    new:true}
    )
    .then((updatedUser) =>
    !updatedUser
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json(updatedUser)
  )
  .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
      //add a Friend
      addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friend: req.body } },
          { runValidators: true, new: true }
        )
          .then((updatedUser) =>
            !updatedUser
              ? res.status(404).json({ message: "No user with this id!" })
              : res.json(updateduser)
          )
          .catch((err) => res.status(500).json(err));
   },
      //Delete a friend
      removeFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { tags: { reactions: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((updatedUser) =>
            !updatedUser
              ? res.status(404).json({ message: "No User with this id!" })
              : res.json(updatedUser)
          )
          .catch((err) => res.status(500).json(err));
      },
};