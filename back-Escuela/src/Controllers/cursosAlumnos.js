const connection=require ('../models/db');

module.exports.cursosAlumnos=(req,res)=>{
    const cod_alumno=req.params.codigo;
    const consult=`SELECT cursos.cod_curso, cursos.nombre
    FROM notas
    JOIN cursos ON notas.cod_curso = cursos.cod_curso
    WHERE notas.cod_alumno =${cod_alumno};`;
    try {
        connection.query(consult,(err,result)=>{
            res.send(result)
        })
    } catch (error) {
        res.send(result)
    }
}