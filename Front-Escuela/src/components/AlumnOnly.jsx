import { useNavigate } from 'react-router-dom'
import './AlumnOnly.css'

const AlumnOnly=({alumno,cursos,cod_curso})=>{
    const {nombre,cod_alumno,ap_paterno,ap_materno}=alumno;
    const navigate=useNavigate();

    const handleClick=()=>{
       navigate(`/loginProfesor/homeProfesor/listaAlumnos/calificacion/${cod_alumno}/${cod_curso}`)
    }
    
    return(
        <div className="contAl">
            <p className='nameAl'>{nombre} {ap_paterno} {ap_materno}</p> 
            <div onClick={handleClick} className='buton'>Ingresar Notas</div>
        </div>
    )
}

export default AlumnOnly