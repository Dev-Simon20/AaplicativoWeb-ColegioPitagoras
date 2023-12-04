const connection = require("../models/db");

module.exports.actualizarNotas = (req, res) => {
  const cod_curso = req.params.cod_curso;
  const cod_alumno = req.params.cod_alumno;
  const nuevaNotaBim1 = req.body.bim_1;
  const nuevaNotaBim2 = req.body.bim_2;
  const nuevaNotaBim3 = req.body.bim_3;
  const nuevaNotaBim4 = req.body.bim_4;

  const consult = `
    UPDATE notas
    SET bim_1 = '${nuevaNotaBim1}', 
        bim_2 = '${nuevaNotaBim2}', 
        bim_3 = '${nuevaNotaBim3}', 
        bim_4 = '${nuevaNotaBim4}'
    WHERE cod_alumno = '${cod_alumno}' AND cod_curso = '${cod_curso}';
  `;
  try {
    connection.query(consult, (err, result) => {
      if (result && result.affectedRows > 0) {
        res.send({ mensaje: 'Notas actualizadas exitosamente' });
      } else {
        res.send({ mensaje: 'No se encontraron registros para actualizar' });
      }
    });
  } catch (error) {
    res.send('Ocurrió un error');
  }
};

// http://localhost:3000/loginProfesor/cursos/lista/notas/put/304/3000001

// {
// 	"bim_1": 10,
//     "bim_2": 12,
//     "bim_3": 14,
//     "bim_4": 16
// }