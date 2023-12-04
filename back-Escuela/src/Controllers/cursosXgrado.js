const connection = require("../models/db");

module.exports.obtenerCursosPorGrado = (req, res) => {
  const cod_grado = req.params.cod_grado;

  const consult = `
    SELECT cod_curso, nombre
    FROM cursos
    WHERE cod_grado = '${cod_grado}';
  `;

  try {
    connection.query(consult, (err, result) => {
      if (result && result.length > 0) {
        res.send(result);
      } else {
        res.send({ mensaje: 'No se encontraron registros de cursos para el grado especificado' });
      }
    });
  } catch (error) {
    res.send('Ocurrió un error');
  }
};
