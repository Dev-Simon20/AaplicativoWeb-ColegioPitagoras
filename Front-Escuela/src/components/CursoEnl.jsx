import { useNavigate } from "react-router-dom";
import "./CursoEnl.css"
const CursoEnl=({curso,enlace,btnText,setCursoNav})=>{
     
    const navigate=useNavigate();
    const{cod_curso,nombre}=curso;
    
    const handleCLick=()=>{
        setCursoNav(nombre);
        navigate(`${enlace}${cod_curso}`);
    }
    let descripcion='Por ahora no hay descripcion'
    return(
        <div className="curs">
          <p className="curs-titulo">{nombre}</p>
           <div className="curs-descp">{descripcion}</div>
           <button className="curs-btn" onClick={handleCLick}>{btnText}</button>
        </div>
    )
}

export default CursoEnl