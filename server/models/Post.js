const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  status: {
    type: String,
    enum: ["TO LEARN", "LEARNING", "LEARNED"],
  },
  user: {
    type: Schema.Types.ObjectId,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("posts", Post);
