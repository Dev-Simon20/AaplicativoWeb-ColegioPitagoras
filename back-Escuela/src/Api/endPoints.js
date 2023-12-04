const express = require('express');
const router = express.Router();

// Cuado se exporta el controlador asimodule.exports = ping;
// Al importarlo aca no se debe de destructurar debe de estar sin {}
// const  ping  = require('../Controllers/pingController');

// Cuando se esporta asi: module.exports.ping=(req,res)=>{
// Si se debe de destructurar
const  {ping} = require('../Controllers/pingController');
const {loginAlumno} = require('../Controllers/loginAlumno');
const {cursosAlumnos}=require('../Controllers/cursosAlumnos')
const {loginProfesor}=require('../Controllers/loginProfesor');
const {notasAl}=require('../Controllers/notasAl');

const {cursoImpartido}=require('../Controllers/cursoImpartido');
const {listaAlum}=require('../Controllers/listaAlum');
const {notaProf}=require('../Controllers/notaProf')
const {actualizarNotas}=require('../Controllers/actualizarNotas')

const {obtenerProfesores}=require('../Controllers/obtenerProf');
const {obtenerCursosPorGrado}=require('../Controllers/cursosXgrado');
const {actualizarProfesorEnCurso}=require('../Controllers/actualizarProfesorCurso')
const {crearNuevoAlumno}=require('../Controllers/crearNuevoAlumno');
const {crearNuevoProfesor}=require('../Controllers/crearNuevoProfesor')


router.get('/ping', ping);

// Rutas rquerido por la entidad Alumno
router.post('/loginAlumno',loginAlumno);
router.get('/loginAlumno/:codigo',cursosAlumnos)
router.get('/loginAlumno/:cod_alumno/:cod_curso',notasAl)

//Rutas requeridas por la entidad profesor
router.post('/loginProfesor',loginProfesor);
router.get('/loginProfesor/cursos/:cod_profesor',cursoImpartido)
router.get('/loginProfesor/cursos/lista/:cod_curso',listaAlum);
router.get('/loginProfesor/cursos/lista/notas/:cod_curso/:cod_alumno',notaProf)
router.put('/loginProfesor/cursos/lista/notas/put/:cod_curso/:cod_alumno',actualizarNotas)

//Rutas parav el adminstrador

router.get('/loginAdmin/home',obtenerProfesores);
router.get('/loginAdmin/home/:cod_grado',obtenerCursosPorGrado);
router.put('/loginAdmin/home/actu',actualizarProfesorEnCurso);

router.post('/loginAdmin/home/create',crearNuevoAlumno);
router.post('/loginAdmin/home/createProfesor',crearNuevoProfesor)






module.exports = router;