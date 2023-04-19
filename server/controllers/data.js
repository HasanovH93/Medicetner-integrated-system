const {
  create,
  getAll,
  getOrderById,
  deleteById,
  updateStatusById,
} = require("../services/item");
const { parseError } = require("../util/parser");
const { s3UploadImg } = require("../middlewares/imagesUpload");

const dataController = require("express").Router();

dataController.post("/create", s3UploadImg(), async (req, res) => {
  try {
    req.body = JSON.parse(JSON.stringify(req.body));
    req.body.status = "Pending";
    req.body.createdAt = new Date().toISOString();

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

dataController.get("/single/:id", async (req, res) => {
  console.log(req);
  try {
    const id = req.params.id;
    const data = await getOrderById(id);
    res.status(200).send({ data });
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

dataController.delete("/single/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteById(id);
    res.status(200).send({ data });
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

dataController.patch("/single/:id", async (req, res) => {
  console.log(req);
  try {
    const id = req.params.id;
    const { status } = req.body;
    const updatedOrder = await updateStatusById(id, status);
    console.log(updatedOrder);
    res.status(200).json({
      message: "Order status updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

module.exports = dataController;
