import { useNavigate } from "react-router-dom";
import HeadHome from "../components/HeadHome";
import { useState } from "react";
import CursoEnl from "../components/CursoEnl";
import './HomeProfesor.css'

const cursosTemp = [
    {
      id: 1,
      nombre: "Libro de Programación en Python",
      descripcion:
        "Un libro introductorio sobre programación en el lenguaje de programación Python.",
    },
    {
      id: 2,
      nombre: "Curso de Diseño Gráfico",
      descripcion:
        "Un curso en línea que cubre los fundamentos del diseño gráfico utilizando herramientas como Adobe Photoshop e Illustrator.",
    },
    {
      id: 3,
      nombre: "Kit de Experimentos Científicos",
      descripcion:
        "Un conjunto de experimentos científicos para niños que incluye materiales y guías para realizar actividades educativas y divertidas.",
    },
    {
      id: 4,
      nombre: "Clases de Yoga en Video",
      descripcion:
        "Una serie de videos en línea que guían a los usuarios a través de clases de yoga para mejorar la flexibilidad y la relajación.",
    },
    {
      id: 5,
      nombre: "Juego de Construcción de Robots",
      descripcion:
        "Un kit de construcción que permite a los niños aprender sobre la robótica mientras construyen y programan sus propios robots.",
    },
  ];
 const HomeProfesor=({estado})=>{
    const navigate=useNavigate()
    const [cursos,setCursos]=useState(cursosTemp);


    const handleBack=()=>{
        navigate('/loginProfesor')
    }
    const enlace = "/loginProfesor/homeProfesor/listaAlumnos/";
    const btnText = "Ver Notas";

    return(
        <>
        <HeadHome handleBack={handleBack}></HeadHome>
        <h3 className=" tit">Dashboard de Profesor</h3>
        <div className="conteinerCur">
        {cursos.map((curso,i)=>(<CursoEnl key={i} curso={curso} enlace={enlace} btnText={btnText}/>))}
        </div>
        
        </>
    )
 }

 export default HomeProfesor