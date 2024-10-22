const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(mongo_url);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66e18edf5c60e62e20d78466",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data Was Initialized");
};

initDB();
