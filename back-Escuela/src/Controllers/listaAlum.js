const connection = require("../models/db");
// Se extraera el codigo del curso desde los parametros de la url y se mandara una lista de alumnos que estan matriculados en ese curso
module.exports.listaAlum = (req, res) => {
  const cod_curso = req.params.cod_curso;
  const consult = `SELECT alumnos.cod_alumno, alumnos.nombre, alumnos.ap_paterno, alumnos.ap_materno
  FROM alumnos
  JOIN notas ON alumnos.cod_alumno = notas.cod_alumno
  WHERE notas.cod_curso ='${cod_curso}';`;

  try {
    connection.query(consult,(err,result)=>{
        res.send(result);
    })
  } catch (error) {
    res.send('Ocurrio un error')
  }
};

// http://localhost:3000/loginProfesor/cursos/lista/301

// [
//     {
//         "cod_alumno": 3000001,
//         "nombre": "Carlos",
//         "ap_paterno": "López",
//         "ap_materno": "García"
//     }
// ]