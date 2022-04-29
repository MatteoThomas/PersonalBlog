const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    tags: { type: String, required: true },
  },
  { collection: "posts" }
);

const model = mongoose.model("PersonalBlog", Post);

module.exports = model;
