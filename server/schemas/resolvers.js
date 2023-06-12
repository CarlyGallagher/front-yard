const { AuthenticationError } = require("apollo-server-express");
const { User, Listing, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("listings", "followers");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("listings", "followers");
    },
    me: async (parent, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    followers: async (parent, { username }) => {
      return User.findOne({ username }).populate("followers");
    },
    listings: async (parent, { zip }) => {
      const params = !zip ? {} : { zip }
      return Listing.find(params);
    },
    listing: async (parent, { _id }) => {
      const listing = Listing.findOne({ _id });
      return listing;
    },
    listingIsTaken: async (parent, { _id }) => {
      const listing = Listing.findOne({ _id });
      return listing.isTaken;
    },
    reviews: async () => {
      return Review.find();
    },
    review: async (parent, { _id }) => {
      review = Review.findOne({ _id });
      return review;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    addFollower: async (parent, { username }) => {
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { followers: followerName } },
        { new: true },
      );
      return user;
    },
    addListing: async (
      parent,
      { title, description, zip },
    ) => {
      const listing = await Listing.create({
        title,
        description,
        zip
      });
      return listing;
    },
    removeListing: async (parent, { _id }) => {
      const listing = await Listing.findOneAndDelete({ _id });
      return listing;
    },
    addReview: async (parent, { reviewText, reviewAuthor }) => {
      const review = await Review.create({ reviewText, reviewAuthor });
      return review;
    },
    removeReview: async (parent, { _id }) => {
      const review = await Review.findOneAndDelete({ _id });
      return review;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
