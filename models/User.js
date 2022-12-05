const { Schema, model } = require("mongoose");
const Friend = require("./Friend");

// Schema to create User model
const userSchema = new Schema(
  {
    username:{
      type: String,
      unique:true,
      required:true,
      trime:true,
    },
    email: [
      {
        type: String,
        unique:true,
        required:true,
        match: emailRegex,
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [{
      type: Schema.Types.ObjectId,
      ref:'user'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//creates a profile with user name and friends
userSchema
  .virtual("profile")
  // Getter
  .get(function () {
    return `
    ${this.user},
    ${this.friends.length}`;
  });

// Initialize our User model
const User = model("username", userSchema);

module.exports = User;
