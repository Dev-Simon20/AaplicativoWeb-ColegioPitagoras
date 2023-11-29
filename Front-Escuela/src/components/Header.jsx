import {Link,NavLink} from "react-router-dom"
import './Header.css'
const Header =()=>{
    return(
        <nav className="nav">
            <Link className="enlace" to="/">Informacion</Link>
            <Link className="enlace" to="/loginAdmin">Administrador</Link>
            <Link className="enlace" to="/loginAlumno">Alumno</Link>
            <Link className="enlace" to="/loginProfesor">Profesor</Link>
        </nav>
    )
}

export default Header