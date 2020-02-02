const express = require('express');
const rutas = express.Router();

// Require Business model in our routes module
let Usuario = require('./modeloUsuario');

// Defined store route
rutas.route('/add').post(function (req, res) {
  let usuario = new Usuario(req.body);
  usuario.save()
    .then(usuario => {
      res.status(200).json({'usuario': 'usuario añadido correctamente'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
rutas.route('/').get(function (req, res) {
    Usuario.find(function(err, usuario){
    if(err){
      console.log(err);
    }
    else {
      console.log(usuario);
      res.json(usuario);
    }
  });
});

// Defined edit route
rutas.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Usuario.findById(id, function (err, usuario){
      res.json(usuario);
  });
});

//  Defined update route
rutas.route('/update/:id').post(function (req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
    if (!usuario)
      res.status(404).json({'status': 'no se ha encontrado el usuario'});
    else {
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.password = req.body.password;

        usuario.save().then(usuario => {
          res.json({'status': 'actualizado', 'usuario': usuario});
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
rutas.route('/delete/:id').get(function (req, res) {
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err, usuario){
        if(err) res.json(err);
        else res.json({'status': 'Successfully removed', '_id': req.params.id});
    });
});

module.exports = rutas;