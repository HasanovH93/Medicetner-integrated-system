const { create, getAll } = require("../services/item");
const { parseError } = require("../util/parser");
const { s3UploadImg } = require("../middlewares/imagesUpload");

const dataController = require("express").Router();

dataController.post("/create", s3UploadImg(), async (req, res) => {
  try {
    req.body = JSON.parse(JSON.stringify(req.body));
    const createdOrder = await create(req.body);

    res
      .status(201)
      .json({ message: "Order created successfully", data: createdOrder });
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

dataController.get("/all-orders", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = 100;
    const skip = parseInt(page * limit);
    const data = await getAll(skip, limit);
    res.status(200).json(data);
  } catch (error) {
    const message = parseError(message);
    res.status(400).json({ message });
  }
});

module.exports = dataController;
