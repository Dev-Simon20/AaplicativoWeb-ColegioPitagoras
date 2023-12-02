import { useNavigate } from "react-router-dom";
import HeadHome from "../components/HeadHome";
import "./HomeAdmin.css";
import { useState } from "react";
import CursoProfesor from "../components/CursoProfesor";


  const cursoIni=[{
    id: 1,
    nombre: "Libro de Programación en Python"
  },
  {
    id: 2,
    nombre: "Curso de Diseño Gráfico"
  },
  {
    id: 3,
    nombre: "Kit de Experimentos Científicos"
  },
  {
    id: 4,
    nombre: "Clases de Yoga en Video"
  },
  {
    id: 5,
    nombre: "Juego de Construcción de Robots"
  }]

const HomeAdmin = ({ estado }) => {
  
  const [mostrar,setMostrar]=useState(false);

  const [cursos,setCursos]=useState(cursoIni)
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/loginAdmin");
  };

  const handleClick=()=>{
    //Este handle click a la hora de la implemetacion recibira como parametro el codigo del grado
    //Para que pueda hacer un solcitud get de los cursos de ese grado en especifico
    mostrar?setMostrar(false):setMostrar(true)
    
  }

  const enviarDatos=(data)=>{
     console.log('enviando datos',data);
  }

  return (
    <>
      <HeadHome handleBack={handleBack}></HeadHome>
      <div>
        <h3 className="ho">Dashboard de Admin</h3>
        <p>Asigancion de docentes</p>
        <section className="contenGrado">
          <article className="grad">
            <div className="gradbtn">
              <p>Primero de Secundaria</p>
              <p className="boton" onClick={handleClick}>Editar</p>
            </div>
            <div>
              {mostrar&&cursos.map((curso,i)=>(<CursoProfesor enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Primero de Secundaria</p>
              <p onClick={handleClick}>Editar</p>
            </div>
            <div>
              {mostrar&&cursos.map((curso,i)=>(<CursoProfesor enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Primero de Secundaria</p>
              <p onClick={handleClick}>Editar</p>
            </div>
            <div>
              {mostrar&&cursos.map((curso,i)=>(<CursoProfesor enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Primero de Secundaria</p>
              <p onClick={handleClick}>Editar</p>
            </div>
            <div>
              {mostrar&&cursos.map((curso,i)=>(<CursoProfesor enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Primero de Secundaria</p>
              <p onClick={handleClick}>Editar</p>
            </div>
            <div>
              {mostrar&&cursos.map((curso,i)=>(<CursoProfesor enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
        </section>
        <section></section>
        <section></section>
      </div>
    </>
  );
};

export default HomeAdmin;
