const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    min: 0.00
  },
  image: {
    type: String,
  },
  zip: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    ref: "User",
  },
  isTaken: {
    type: Boolean,
    default: false
  },
},
{
  toJSON: {
    getters: true
  }
}
);

const Listing = model("Listing", listingSchema);

module.exports = Listing;