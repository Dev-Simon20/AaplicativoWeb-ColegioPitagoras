import { useNavigate } from 'react-router-dom'
import './AlumnOnly.css'

const AlumnOnly=({alumno,cursos})=>{
    const {nombre,id}=alumno;
    const { nombre: nombreCurso, id: idCurso, descripcion } = cursos;
    const navigate=useNavigate();

    const handleClick=()=>{
       navigate(`/loginProfesor/homeProfesor/listaAlumnos/calificacion/${id}/${idCurso}`)
    }
    
    return(
        <div className="contAl">
            <p className='nameAl'>{nombre}</p> 
            <div onClick={handleClick} className='buton'>Ingresar Notas</div>
        </div>
    )
}

export default AlumnOnly