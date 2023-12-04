import "./HomeAlumno.css";
import {helphttp} from '../Helpers/helphttps'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CursoEnl from "../components/CursoEnl";
import HeadHome from "../components/HeadHome";


const HomeAlumno = ({ estado,setEstado,rol,u}) => {
  const {cod_alum,nombre,apellido,estado:est}=u;
  const [curso, setCursos] = useState([]);
  const [cursoNav,setCursoNav]=useState('');
  const [option, setOption] = useState();
  const navigate = useNavigate();


  var api=helphttp();
  var url=`http://localhost:3000/loginAlumno/${cod_alum}`
  useEffect(()=>{
    !estado&&navigate('/loginAlumno');
    api.get(url).then((data)=>{
      data.map((data)=>(
        setCursos((curso)=>[...curso,data])
      ))
    })
  },[])
  
  useEffect(()=>{
    !estado&&navigate('/loginAlumno');
  },[estado]);
  const handleBack = () => {
    navigate("/loginAlumno");
  };
  const enlace = "/loginAlumno/homeAlumno/notasAlumno/";
  const btnText = "Ver Notas";

  return (
    <div className="dash">
      <HeadHome handleBack={handleBack} setEstado={setEstado}></HeadHome>
      <h3 className="dash-rol">Logeado Como Alumno</h3>
      <div className="dash-cursos">
        {curso.map((curso, i) => (
          <CursoEnl key={i} curso={curso} setCursoNav={setCursoNav} enlace={enlace} btnText={btnText} />
        ))}
      </div>
    </div>
  );
};

export default HomeAlumno;
