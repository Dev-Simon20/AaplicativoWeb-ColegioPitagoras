const connection = require("../models/db");

module.exports.ping = (req, res) => {
  // Guardamos la consuulta en una variable
  const consult = `SELECT a.nombre AS nombre_estudiante, c.nombre AS nombre_curso
  FROM notas n
  JOIN cursos c ON n.cod_curso = c.cod_curso
  JOIN alumnos a ON n.cod_alumno = a.cod_alumno
  WHERE n.cod_alumno = 2000001;
  `;

  try{
    connection.query(consult, (err, results) => {
        res.json(results);
      })
  }
  catch(e){

  }
};


// const ping = (req, res) => {
//     res.send('ping');
// }

// module.exports = ping;
