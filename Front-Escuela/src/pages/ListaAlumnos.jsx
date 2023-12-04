import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import HeadHome from "../components/HeadHome";
import './ListaAlumnos.css'
import AlumnOnly from "../components/AlumnOnly";
import {helphttp} from '../Helpers/helphttps'
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
const alumnosInitial=[
    {
      id: 1,
      nombre: "Ana García"
    },
    {
      id: 2,
      nombre: "Juan Martínez"
    },
    {
      id: 3,
      nombre: "María Rodríguez"
    },
    {
      id: 4,
      nombre: "Carlos López"
    },
    {
      id: 5,
      nombre: "Laura Pérez"
    }
  ]
const ListaAlumnos=({cursoNav})=>{
    const navigate=useNavigate();
    const [cod_curso,setCod]=useState(useParams().id)
    const [cursos,setCursos]=useState(cursosTemp)
    const [alumnos,setAlumnos]=useState(alumnosInitial);
    const api=helphttp();
    const url=`http://localhost:3000/loginProfesor/cursos/lista/${cod_curso}`;

    useEffect(()=>{
       api.get(url).then((data)=>{
        setAlumnos(data)
        console.log(data);
       })
    },[])
    const handleBack=()=>{
        navigate('/loginProfesor/homeProfesor');
    }
    // var nombreCur=cursos[id].nombre;
    return(
        <>
        <HeadHome handleBack={handleBack}></HeadHome>
         <div className="content">
           <h3 className="titLista"> Curso: {cursoNav}</h3>
            {alumnos.map((alumno,i)=>(
                <AlumnOnly alumno={alumno} key={i} cod_curso={cod_curso}/>
            ))}
         </div>
         
        </>
    )
}

export default ListaAlumnos