import { useNavigate } from "react-router-dom";
import "./CursoEnl.css"
const CursoEnl=({curso})=>{
     
    const navigate=useNavigate();
    const{id,nombre,descripcion}=curso;

    const handleCLick=()=>{
        navigate(`/loginAlumno/homeAlumno/${id}`);
        console.log(id);

    }

    return(
        <div className="curs">
          <p className="curs-titulo">{nombre}</p>
           <div className="curs-descp">{descripcion}</div>
           <button className="curs-btn" onClick={handleCLick}>Ver Notas</button>
        </div>
    )
}

export default CursoEnl