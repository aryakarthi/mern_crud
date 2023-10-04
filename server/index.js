const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;
const ContactModel = require("./models/Contacts");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mern_crud");

app.post("/create", (req, res) => {
  ContactModel.create(req.body)
    .then((contacts) => res.json(contacts))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  ContactModel.find({})
    .then((contacts) => res.json(contacts))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  ContactModel.findById({ _id: id })
    .then((contacts) => res.json(contacts))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  ContactModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      city: req.body.city,
    }
  )
    .then((contacts) => res.json(contacts))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  ContactModel.findByIdAndDelete({ _id: id })
    .then((contacts) => res.json(contacts))
    .catch((err) => res.json(err));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
