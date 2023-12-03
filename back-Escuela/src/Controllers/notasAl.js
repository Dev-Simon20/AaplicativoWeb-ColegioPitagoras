const connection=require('../models/db');

module.exports.notasAl=(req,res)=>{
   const cod_alumno=req.params.cod_alumno;
   const cod_curso=req.params.cod_curso;
   consul=`SELECT notas.*,
   cursos.nombre AS nombre_curso
FROM notas
JOIN cursos ON notas.cod_curso = cursos.cod_curso
WHERE notas.cod_alumno =${cod_alumno} AND notas.cod_curso =${cod_curso};`
   try {
    connection.query(consul,(err,result)=>{
      var data={
         nota1:result[0].bim_1,
         nota2:result[0].bim_2,
         nota3:result[0].bim_3,
         nota4:result[0].bim_4,
         nombre:result[0].nombre_curso
     }
        res.send(data)
    })
   } catch (error) {
    
   }
}