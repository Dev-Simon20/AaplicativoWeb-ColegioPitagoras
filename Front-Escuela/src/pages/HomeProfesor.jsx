import { useNavigate } from "react-router-dom";
import HeadHome from "../components/HeadHome";
import { useEffect, useState } from "react";
import CursoEnl from "../components/CursoEnl";
import {helphttp} from '../Helpers/helphttps'
import './HomeProfesor.css'


 const HomeProfesor=({estado,setCursoNav,u,setEstado})=>{
  const {cod_prof,nombre,apellido,estado:est}=u;
    const navigate=useNavigate()
    const [cursos,setCursos]=useState([]);
    const api=helphttp();
    const url=`http://localhost:3000/loginProfesor/cursos/${cod_prof}`
    useEffect(()=>{
      !estado&&navigate('/loginProfesor');
    },[estado]);
    useEffect(()=>{
      api.get(url).then((data)=>{
        console.log(data);
        setCursos(data);
      });
    },[])
    const handleBack=()=>{
        navigate('/loginProfesor')
    }
    const enlace = "/loginProfesor/homeProfesor/listaAlumnos/";
    const btnText = "Ver Notas";

    return(
        <>
        <HeadHome handleBack={handleBack} setEstado={setEstado}></HeadHome>
        <h3 className=" tit">Dashboard de Profesor</h3>
        <div className="conteinerCur">
        {cursos.map((curso,i)=>(<CursoEnl setCursoNav={setCursoNav} key={i} curso={curso} enlace={enlace} btnText={btnText}/>))}
        </div>
        
        </>
    )
 }

 export default HomeProfesor