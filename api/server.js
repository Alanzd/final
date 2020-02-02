// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const rutas =  require('./rutas');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{ useNewUrlParser: true }).then(
  () => {console.log('Database conectada') },
  err => { console.log('No se puede conectar'+ err)}
);


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/usuario', rutas);

app.listen(PORT, function(){
  console.log('Servidor corriendo en puerto',PORT);
});