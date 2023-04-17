const mongoose = require("mongoose");
const { Schema } = mongoose;

const arbeitsunfaehigkeitsbescheinigungSchema = new Schema({
  dateFrom: String,
  dateTo: String,
  grund: String,
});

const heilmittelSchema = new Schema({
  therapie: String,
});

const chosenCheckboxesSchema = new Schema(
  {
    arbeitsunfähigkeitsbescheinigung: arbeitsunfaehigkeitsbescheinigungSchema,
    Heilmittel: heilmittelSchema,
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
  chosenCheckboxes: [chosenCheckboxesSchema],
});

const User = mongoose.model("Orders", orderSchema);

module.exports = User;