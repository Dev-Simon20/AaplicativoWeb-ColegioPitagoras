import { useState } from "react";
import {helphttp} from '../Helpers/helphttps'

const FormProfesor=()=>{
    const [form,setForm]=useState([]);
    
    var api=helphttp();
    var url=`http://localhost:3000/loginAdmin/home/createProfesor`

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
        console.log(form);
    }

    return(
        <div>
            <form onSubmit={registrar}>
                <input type="number" onChange={handleChange} value={form.cod_profesor} name="cod_profesor" placeholder="Ingrese el Dni" />
                <input type="text"   onChange={handleChange} value={form.nombre} name="nombre" placeholder="Nombre"/>
                <input type="text"   onChange={handleChange} value={form.ap_paterno} name="ap_paterno" placeholder="apellido paterno" />
                <input type="text"   onChange={handleChange} value={form.ap_materno} name="ap_materno" placeholder="apellido materno" />
                <input type="number" onChange={handleChange} value={form.edad} name="edad" placeholder="Ingrese su edad"  min={11} maxLength={2}/>
                <input type="text"   onChange={handleChange} value={form.genero} name="genero" maxLength={1} placeholder="Genero"/>
                <input type="number" onChange={handleChange} value={form.movil} name="movil" maxLength={9} />
                <input type="submit" />
            </form>
        </div>
    )
}
export default FormProfesor;