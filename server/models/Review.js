const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  reviewAuthor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;