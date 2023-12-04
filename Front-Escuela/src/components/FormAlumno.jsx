import { useState } from "react";
import {helphttp} from '../Helpers/helphttps'

const FormAlumno=()=>{
    const [form,setForm]=useState([]);
    
    var api=helphttp();
    var url=`http://localhost:3000/loginAdmin/home/create`

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        }
        )
    }

    const registrar=(e)=>{
        e.preventDefault();
        let cadena=form.ap_paterno
        let cortar=cadena.slice(0,3)
        console.log(cortar);
        form.usuario=`${form.nombre}${cortar}`;
        form.contrasena=`${form.nombre}${cortar}`;
        let opt = { body: form, headers: { "content-type": "application/json" } };
        api.post(url, opt).then((res) => {
            console.log("El contenido de res es :", res);
          });
    }

    return(
        <div>
            <form onSubmit={registrar}>
                <input type="number" onChange={handleChange} value={form.cod_alumno} name="cod_alumno" placeholder="Ingrese el Dni" />
                <input type="text"   onChange={handleChange} value={form.nombre} name="nombre" placeholder="Nombre"/>
                <input type="text"   onChange={handleChange} value={form.ap_paterno} name="ap_paterno" placeholder="apellido paterno" />
                <input type="text"   onChange={handleChange} value={form.ap_materno} name="ap_materno" placeholder="apellido materno" />
                <input type="number" onChange={handleChange} value={form.edad} name="edad" placeholder="Ingrese su edad" max={18} min={11} maxLength={2}/>
                <input type="text"   onChange={handleChange} value={form.genero} name="genero" maxLength={1} placeholder="Genero"/>
                <select name="cod_grado" onChange={handleChange} value={form.cod_grado}>
                    <option value="100">Primero de Secundaria</option>
                    <option value="200">Segundo de Secundaria</option>
                    <option value="300">Tercero de Secundaria</option>
                    <option value="400">Cuarto de Secundaria</option>
                    <option value="500">Quinto de Secundaria</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}
export default FormAlumno;