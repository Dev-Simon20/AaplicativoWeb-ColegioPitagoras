const connection=require('../models/db');

module.exports.loginProfesor=(req,res)=>{
   const {usuario,contrasena}=req.body;
   const consult=`SELECT cod_profesor,nombre,ap_paterno,usuario,contrasena FROM profesores WHERE usuario=? AND contrasena=?;`;

   try{
      connection.query(consult,[usuario,contrasena],(err,result)=>{
         if(err){
            res.send(err);
         }
         if(result.length>0){
            var data={
                cod_prof:result[0].cod_profesor,
                nombre:result[0].nombre,
                apellido:result[0].ap_paterno,
                estado:true
            }
            res.send(data)
         }
         else{
            res.send('Usuario no encontrado')
         }
      })
   }
   catch(e){
    res.send('Error del servidor')
   }
}