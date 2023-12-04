const connection = require("../models/db");

module.exports.crearNuevoProfesor = (req, res) => {
  // Obtén los datos del nuevo profesor desde el cuerpo de la solicitud
  const nuevoProfesor = {
    nombre: req.body.nombre,
    ap_paterno: req.body.ap_paterno,
    ap_materno: req.body.ap_materno,
    cod_profesor: parseInt(req.body.cod_profesor),
    contrasena: req.body.contrasena,
    usuario: req.body.usuario,
    edad: req.body.edad,
    genero: req.body.genero,
    movil:req.body.movil
  };

  // Paso 1: Insertar el nuevo profesor en la tabla profesores
  connection.query('INSERT INTO profesores SET ?', nuevoProfesor, (error, resultProfesor) => {
    if (error) {
      console.error(error);
      return res.send({ mensaje: 'Ocurrió un error al registrar el profesor' });
    }

    res.send({ mensaje: 'Nuevo profesor registrado exitosamente' });
  });
};

// {
//     "ap_materno": "Vilcas",
//     "ap_paterno": "Carl",
//     "cod_profesor": 731541,
//     "contrasena": "VilcasCar",
//     "edad": "30",
//     "genero": "m",
//     "nombre": "Julian",
//     "usuario": "VilcasCar",
//     "movil":"1234566"
//     }