import { useState } from "react";

const listaProf = [
  {
    id: 1,
    nombre: "Profesor López",
  },
  {
    id: 2,
    nombre: "Profesora García",
  },
  {
    id: 3,
    nombre: "Profesor Martínez",
  },
  {
    id: 4,
    nombre: "Profesora Rodríguez",
  },
  {
    id: 5,
    nombre: "Profesor Pérez",
  },
];
const CursoProfesor = ({curso,enviarDatos}) => {
  const [profesor, setProfesor] = useState(listaProf);
  const [seleccion,setSeleccion]=useState('');
  const {id,nombre}=curso

  const handleClick=()=>{
    let data={
        idCurso:id,
        idProfe:seleccion
    }
    enviarDatos(data)
  }
  const handleChange=(e)=>{
      setSeleccion(`${e.target.value}`)
  }

  return (
    <>
      <div>
        <p>{nombre}</p>
        <select onChange={handleChange} className="dash-head-opt" name="" id="">
          {profesor.map((profesor,i)=>(<option key={i} value={profesor.id}>{profesor.nombre}</option>))}
        </select>
        <button onClick={handleClick}>Save</button>
      </div>
    </>
  );
};
export default CursoProfesor;
