const connection = require("../models/db");
// Nos devueleve la lista de los cursos que imparte un profesor
module.exports.cursoImpartido = (req, res) => {
  const cod_profesor = req.params.cod_profesor;
  const consult = `SELECT cursos.cod_curso, cursos.nombre
    FROM cursos
    JOIN profesores ON cursos.cod_profesor = profesores.cod_profesor
    WHERE profesores.cod_profesor ='${cod_profesor}';`;
  try {
    connection.query(consult,(err, result) => {
      res.send(result);
    })
  } catch (error) {
    res.send("Hubo un error");
  }
};

// http://localhost:3000/loginProfesor/cursos/100077
// [
//     {
//         "cod_curso": 101,
//         "nombre": "Comunicación1"
//     },
//     {
//         "cod_curso": 104,
//         "nombre": "Arte1"
//     },
//     {
//         "cod_curso": 201,
//         "nombre": "Comunicación2"
//     },
//     {
//         "cod_curso": 204,
//         "nombre": "Arte2"
//     },
//     {
//         "cod_curso": 301,
//         "nombre": "Comunicación3"
//     },
//     {
//         "cod_curso": 304,
//         "nombre": "Arte3"
//     }
// ]
