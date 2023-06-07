const db = require("../config/connection");
const { User, Listing } = require("../models");
const userSeeds = require("./userSeeds.json");
const listingSeeds = require("./listingSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Listing.deleteMany({});
    await Listing.create(listingSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
