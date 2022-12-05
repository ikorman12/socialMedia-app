const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  //GET all
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().sort({ createdAt: -1 });
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //GET a single thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughId });
      !thought
        ? res.status(400).json({ message: "no Thought found with this id" })
        : res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //Create a thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
      !updatedUser
        ? res
            .status(404)
            .json({ message: "Thought created BUT no user ID!!!!" })
        : res.json({
            message: "successfully created Thought!🎉🎉🎉🎉🎉🎉🎉🎉",
          });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //Update Thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updateThought) =>
        !updateThought
          ? res.status(404).json({ message: "No Thought with this id!" })
          : res.json(updatedThought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //Delete Thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created but no user with this id!",
            })
          : res.json({ message: "Thought successfully deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  //add Reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((updatedThought) =>
        !updatedThought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(updatedThought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Delete a reaction
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { tags: { reactions: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((updatedThought) =>
        !updatedThought
          ? res.status(404).json({ message: "No Thought with this id!" })
          : res.json(updatedThought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
