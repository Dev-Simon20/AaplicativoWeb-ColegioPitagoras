const util = require('util');
const connection = require("../models/db");

const query = util.promisify(connection.query).bind(connection);

module.exports.crearNuevoAlumno = async (req, res) => {
  // Obtén los datos del nuevo alumno desde el cuerpo de la solicitud
  const nuevoAlumno = {
    nombre: req.body.nombre,
    ap_paterno: req.body.ap_paterno,
    ap_materno: req.body.ap_materno,
    cod_alumno: parseInt(req.body.cod_alumno),
    cod_grado: parseInt(req.body.cod_grado),
    contrasena: req.body.contrasena,
    usuario: req.body.usuario,
    edad: req.body.edad,
    genero: req.body.genero,
  };

  // Simplemente asumiré que ya tienes el código del grado del nuevo alumno
  const cod_grado = req.body.cod_grado;

  try {
    // Paso 1: Insertar el nuevo alumno en la tabla alumnos
    await query('INSERT INTO alumnos SET ?', nuevoAlumno);

    const cod_alumno = parseInt(req.body.cod_alumno);

    // Paso 2: Obtener los cursos del grado del nuevo alumno
    const cursos = await query(`SELECT cod_curso FROM cursos WHERE cod_grado = "${cod_grado}"`);

    // Paso 3: Insertar registros de notas para el nuevo alumno en los cursos del grado
    for (const curso of cursos) {
      await query(`INSERT INTO notas (cod_alumno, cod_curso, bim_1, bim_2, bim_3, bim_4) VALUES (${cod_alumno}, ${curso.cod_curso}, null, null, null, null)`);
    }

    res.send({ mensaje: 'Nuevo alumno registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.send({ mensaje: 'Ocurrió un error al registrar el alumno' });
  }
};
