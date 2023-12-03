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
const {notasAl}=require('../Controllers/notasAl')

router.get('/ping', ping);
router.post('/loginAlumno',loginAlumno);
router.get('/loginAlumno/:codigo',cursosAlumnos)
router.get('/loginAlumno/:cod_alumno/:cod_curso',notasAl)
router.post('/loginProfesor',loginProfesor);


module.exports = router;