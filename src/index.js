const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express('');

app.use(cors());
app.use(express.json());  //Entender requisições JSON
app.use(routes);

mongoose.connect("mongodb://localhost:27017/omnistack", { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3333);