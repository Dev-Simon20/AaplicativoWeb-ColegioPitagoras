const connection=require('../models/db')

module.exports.loginAlumno=(req,res)=>{
    const {usuario,contrasena}=req.body;
    const consult=`SELECT cod_alumno,nombre,ap_paterno,usuario,contrasena FROM alumnos WHERE usuario=? AND contrasena=?;`;
    try{
        connection.query(consult,[usuario,contrasena],(err,result)=>{
            if(err){
                res.send(err)
            }
        //Si existe el usuario enviamos una respuesta
        if(result.length>0){
            var data={
                cod_alum:result[0].cod_alumno,
                nombre:result[0].nombre,
                apellido:result[0].ap_paterno,
                estado:true
            }
            res.send(data)
        }
        else{
            res.send(false)
        }
        })
    }
    catch(e){
       res.send('Error en el servidor')
    }
}