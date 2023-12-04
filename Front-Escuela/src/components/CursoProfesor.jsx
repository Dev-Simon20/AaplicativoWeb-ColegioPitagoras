import { useState } from "react";
import "./CursoProf.css";
import {helphttp} from '../Helpers/helphttps'



const CursoProfesor = ({curso,profesores}) => {
  var api=helphttp();
  const [seleccion,setSeleccion]=useState('');
  const {cod_curso,nombre}=curso

  const handleClick=()=>{
    let data={
      "cod_curso":cod_curso,
      "cod_profesor":seleccion
    }
    var url=`http://localhost:3000/loginAdmin/home/actu`
    let opt = { body: data, headers: { "content-type": "application/json" } };
    api.put(url,opt).then((data)=>{
      console.log(data);
    })
  }
  const handleChange=(e)=>{
      setSeleccion(`${e.target.value}`)
      // console.log(cod_curso);
      console.log(e.target.value);
  }
  
  return (
      <div className="cont_sel">
        <p>{nombre}</p>
        <select onChange={handleChange} className="dash-head-opt" name="" id="">
          <option value="">Seleccione</option>
          {profesores.map((profesor,i)=>(<option key={i} value={profesor.cod_profesor}>{profesor.nombre}</option>))}
        </select>
        <button onClick={handleClick}>Save</button>
      </div>
  );
};
export default CursoProfesor;
