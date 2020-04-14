const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const contactRoutes = require('./api/routes/contacts');

app.use(bodyParser.json());
app.use('/contacts', contactRoutes);

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
