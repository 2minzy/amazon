const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));
// be able to access bodyparser middleware
app.use(express.json());

//GET - Retrieve data from the server
app.get('/', (req, res) => {
  res.json('Hello amazon clone');
});

// POST - send data from frontend to backend
app.post('/', (req, res) => {
  console.log(res.body.name);
});

app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on PORT', 3000);
  }
});
