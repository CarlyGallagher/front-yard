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
    required: true,
    min: 0.99
  },
  image: {
    type: String,
    required: true
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
    type: Schema.Types.ObjectId,
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