const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router
  //home route
  .route("/")
  //get ALL thoughts
  .get(getThoughts)
  //POST thoughts
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  //GET single thought
  .get(getOneThought)
  //PUT/update Thought
  .put(updateThought)
  // DELETE thought
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
