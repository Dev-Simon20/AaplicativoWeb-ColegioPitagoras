const connection=require('../models/db')

module.exports.notaProf=(req,res)=>{
   const cod_alumno=req.params.cod_alumno;
   const cod_curso=req.params.cod_curso;
   
   const consult=`
   SELECT cursos.cod_curso, cursos.nombre AS nombre_curso, 
           alumnos.cod_alumno, alumnos.nombre AS nombre_alumno, 
           alumnos.ap_paterno, alumnos.ap_materno, 
           notas.bim_1, notas.bim_2, notas.bim_3, notas.bim_4
    FROM cursos
    JOIN notas ON cursos.cod_curso = notas.cod_curso
    JOIN alumnos ON notas.cod_alumno = alumnos.cod_alumno
    WHERE cursos.cod_curso = '${cod_curso}' AND notas.cod_alumno = '${cod_alumno}';
   `
   try {
    connection.query(consult,(err,result)=>{
        const nota=result[0]
        res.send(nota);
    })
    
   } catch (error) {
    
   }
}


// http://localhost:3000/loginProfesor/cursos/lista/notas/105/1000001

// {
//     "cod_curso": 105,
//     "nombre_curso": "Historia1",
//     "bim_1": 15,
//     "bim_2": 12,
//     "bim_3": 16,
//     "bim_4": 13
// }



