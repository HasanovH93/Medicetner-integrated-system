const mongoose = require("mongoose");
const { Schema } = mongoose;

const auSchema = new Schema(
  {
    dateFrom: String,
    dateTo: String,
    grund: String,
  },
  { _id: false }
);

const heilmittelSchema = new Schema(
  {
    therapie: String,
    grund: String,
  },
  { _id: false }
);

const chosenCheckboxesSchema = new Schema(
  {
    Arbeitsunfähigkeitsbescheinigung: auSchema,
    Heilmittelverordnung: heilmittelSchema,
    Medikamente: Schema.Types.Mixed,
  },
  { _id: false }
);

const orderSchema = new Schema({
  firstName: String,
  secondName: String,
  phone: String,
  email: String,
  dateofbirth: String,
  street: String,
  city: String,
  postcode: String,
  status: String,
  createdAt: Date,
  chosenCheckboxes: [chosenCheckboxesSchema],
});

const User = mongoose.model("Orders", orderSchema);

module.exports = User;
