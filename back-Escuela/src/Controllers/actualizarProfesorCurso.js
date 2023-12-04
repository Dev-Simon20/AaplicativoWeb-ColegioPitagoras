const connection = require("../models/db");

module.exports.actualizarProfesorEnCurso = (req, res) => {
  const cod_profesor = req.body.cod_profesor;
  const cod_curso = req.body.cod_curso;

  const consult = `
    UPDATE cursos
    SET cod_profesor = '${cod_profesor}'
    WHERE cod_curso = '${cod_curso}';
  `;

  try {
    connection.query(consult, (err, result) => {
      if (result && result.affectedRows > 0) {
        res.send({ mensaje: 'Profesor asignado al curso exitosamente' });
      } else {
        res.send({ mensaje: 'No se encontraron registros para actualizar' });
      }
    });
  } catch (error) {
    res.send('Ocurrió un error');
  }
};


// http://localhost:3000/loginAdmin/home/actu/200077/502