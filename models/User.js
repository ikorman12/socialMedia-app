const { Schema, model } = require("mongoose");

// Schema to create User model
const usernameSchema = new Schema(
  {
    username: String,
    email: [
      {
        type: Schema.type.ObjectId,
        ref: "Emails",
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
usernameSchema
  .virtual("profile")
  // Getter
  .get(function () {
    return `${this.username}`;
  })

// Initialize our User model
const Username = model("username", usernameSchema);

module.exports = Username;
