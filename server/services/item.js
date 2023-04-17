const Order = require("../models/Order");

async function create(item) {
  const newOrder = new Order(item);
  console.log(newOrder);
  return await newOrder.save();
}

async function getAll(skip, limit) {
  // Fetch data from the database
  const hotels = await Order.find({}).skip(skip).limit(limit).lean();

  // Calculate the one week ago timestamp
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  // Update the 'new' property based on the 'createdAt' field
  hotels.forEach((hotel) => {
    hotel.new = hotel.createdAt > oneWeekAgo;
  });

  return hotels;
}

module.exports = { create, getAll };
