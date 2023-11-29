import "./HomeAlumno.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CursoEnl from "../components/CursoEnl";
import HeadHome from "../components/HeadHome";

const cursosTemp=[

    {
        "id": 1,
        "nombre": "Libro de Programación en Python",
        "descripcion": "Un libro introductorio sobre programación en el lenguaje de programación Python."
      },
      {
        "id": 2,
        "nombre": "Curso de Diseño Gráfico",
        "descripcion": "Un curso en línea que cubre los fundamentos del diseño gráfico utilizando herramientas como Adobe Photoshop e Illustrator."
      },
      {
        "id": 3,
        "nombre": "Kit de Experimentos Científicos",
        "descripcion": "Un conjunto de experimentos científicos para niños que incluye materiales y guías para realizar actividades educativas y divertidas."
      },
      {
        "id": 4,
        "nombre": "Clases de Yoga en Video",
        "descripcion": "Una serie de videos en línea que guían a los usuarios a través de clases de yoga para mejorar la flexibilidad y la relajación."
      },
      {
        "id": 5,
        "nombre": "Juego de Construcción de Robots",
        "descripcion": "Un kit de construcción que permite a los niños aprender sobre la robótica mientras construyen y programan sus propios robots."
      }
]

const HomeAlumno=({estado})=>{
   
  const navigate=useNavigate();


    const [curso,setCursos]=useState(cursosTemp);
    const [option,setOption]=useState();

    const handleChange=(e)=>{
        setOption(e.target.value)
    }
    const handleBack=()=>{
      navigate('/loginAlumno')
  }

     return(
        <div className="dash">
            <HeadHome handleBack={handleBack}></HeadHome>
            <h3 className="dash-rol">Logeado Como Alumno</h3>
            <div className="dash-cursos">
                 {curso.map((curso,i)=>(
                    <CursoEnl key={i} curso={curso}/>
                 ))}
            </div>
  
        </div>
     )
}

export default HomeAlumno