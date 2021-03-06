const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuario = new Schema({
    "nombre": {
      "type": "String"
    },
    "apellido": {
      "type": "String"
    },
    "email": {
      "type": "String"
    },
    "password": {
      "type": "String"
    },
    "edad": {
      "type": "Number"
    },
    "foto": {
      "type": "String"
    },
    "guardian": {
      "type": "String"
    },
    "datos_guardian": {
      "ubicacion": {
        "lat": {
          "type": "Number"
        },
        "lng": {
          "type": "Number"
        }
      },
      "capacidad_maletas": {
        "type": "Number"
      },
      "titulo": {
        "type": "String"
      },
      "disponibilidad": {
        "type": "String"
      },
      "no_disponible": {
        "type": [
          "String"
        ]
      },
      "valoracion": {
        "type": "Number"
      }
    }
  },{
    collection: 'usuario'
  });

  module.exports = mongoose.model('Usuario', Usuario);