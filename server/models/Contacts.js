const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  city: String,
});

const ContactModel = mongoose.model("contacts", ContactSchema);
module.exports = ContactModel;
