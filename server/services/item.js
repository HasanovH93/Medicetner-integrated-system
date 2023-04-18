const Order = require("../models/Order");

async function create(item) {
  const newOrder = new Order(item);
  return await newOrder.save();
}

async function getAll(skip, limit) {
  const hotels = await Order.find({}).skip(skip).limit(limit).lean();

  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  hotels.forEach((hotel) => {
    hotel.new = hotel.createdAt > oneWeekAgo;
  });

  return hotels;
}

async function getOrderById(id) {
  return await Order.findById(id).lean();
}

async function deleteById(id) {
  const getOrder = await getOrderById(id);
  const result = await Order.deleteOne(getOrder);
  return result;
}

module.exports = { create, getAll, getOrderById, deleteById };
