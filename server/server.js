const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/user");

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the DB");
    }
  }
);

// Middlewares
app.use(morgan("dev"));
// be able to access bodyparser middleware
app.use(express.json());

// require APIs
const productRoutes = require("./routes/product");
app.use("/api", productRoutes);

//GET - Retrieve data from the server
app.get("/", (req, res) => {
  res.json("Hello amazon clone");
});

// POST - send data from frontend to backend
app.post("/", (req, res) => {
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.name;

  user.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("successfully saved");
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on PORT", 3000);
  }
});
