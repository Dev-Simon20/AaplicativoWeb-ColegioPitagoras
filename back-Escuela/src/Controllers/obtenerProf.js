const connection = require("../models/db");

module.exports.obtenerProfesores = (req, res) => {
  const consult = `
    SELECT cod_profesor, nombre
    FROM profesores;
  `;
  try {
    connection.query(consult, (err, result) => {
      if (result && result.length > 0) {
        res.send(result);
      } else {
        res.send({ mensaje: 'No se encontraron registros de profesores' });
      }
    });
  } catch (error) {
    res.send('Ocurrió un error');
  }
};

// http://localhost:3000/loginAdmin/home

// [
//     {
//         "cod_profesor": 100077,
//         "nombre": "Juan"
//     },
//     {
//         "cod_profesor": 200077,
//         "nombre": "Maria"
//     },
//     {
//         "cod_profesor": 300077,
//         "nombre": "Luis"
//     },
//     {
//         "cod_profesor": 400077,
//         "nombre": "Ana"
//     },
//     {
//         "cod_profesor": 500077,
//         "nombre": "Jorge"
//     },
//     {
//         "cod_profesor": 600077,
//         "nombre": "Rosa"
//     },
//     {
//         "cod_profesor": 700077,
//         "nombre": "Carlos"
//     },
//     {
//         "cod_profesor": 800077,
//         "nombre": "Sofia"
//     },
//     {
//         "cod_profesor": 900077,
//         "nombre": "Pedro"
//     },
//     {
//         "cod_profesor": 1000077,
//         "nombre": "Marta"
//     }
// ]