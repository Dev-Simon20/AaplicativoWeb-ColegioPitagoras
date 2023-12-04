import { useNavigate } from "react-router-dom";
import HeadHome from "../components/HeadHome";
import "./HomeAdmin.css";
import { useEffect, useState } from "react";
import CursoProfesor from "../components/CursoProfesor";
import {helphttp} from '../Helpers/helphttps'
import FormAlumno from "../components/FormAlumno";
import FormProfesor from "../components/FormProfesor";



const HomeAdmin = ({ estado }) => {
  var api=helphttp();
  var url=`http://localhost:3000/loginAdmin/home`
  const [mostrar,setMostrar]=useState('');
  const [cursos,setCursos]=useState([]);
  const [profesores,setProfesores]=useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/loginAdmin");
  };
   
   useEffect(()=>{
      api.get(url).then((data)=>{
        setProfesores(data)  
      })
   },[])


  const llamadaApi=(cod_grado)=>{
      let url=`http://localhost:3000/loginAdmin/home/${cod_grado}`
      api.get(url).then((data)=>{
        setCursos(data)
      })
  }

  const handleClick=(cod_grado)=>{
    if(mostrar==cod_grado){
      setMostrar('')
    }
    else{
      setMostrar(cod_grado)
      llamadaApi(cod_grado)
    }
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
              <p className="boton" onClick={()=>handleClick('100')}>Editar</p>
            </div>
            <div className="listOpc">
              {mostrar=='100'&&cursos.map((curso,i)=>(<CursoProfesor profesores={profesores} enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>

          
          <article className="grad">
            <div className="gradbtn">
              <p>Segundo de Secundaria</p>
              <p className="boton" onClick={()=>handleClick('200')}>Editar</p>
            </div>
            <div className="listOpc">
              {mostrar=='200'&&cursos.map((curso,i)=>(<CursoProfesor profesores={profesores} enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Tercero de Secundaria</p>
              <p className="boton" onClick={()=>handleClick('300')}>Editar</p>
            </div>
            <div className="listOpc">
              {mostrar=='300'&&cursos.map((curso,i)=>(<CursoProfesor profesores={profesores} enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Cuarto de Secundaria</p>
              <p className="boton" onClick={()=>handleClick('400')}>Editar</p>
            </div>
            <div className="listOpc">
              {mostrar=='400'&&cursos.map((curso,i)=>(<CursoProfesor profesores={profesores} enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
          <article className="grad">
            <div className="gradbtn">
              <p>Quinto de Secundaria</p>
              <p className="boton" onClick={()=>handleClick('500')}>Editar</p>
            </div>
            <div className="listOpc">
              {mostrar=='500'&&cursos.map((curso,i)=>(<CursoProfesor profesores={profesores} enviarDatos={enviarDatos} key={i} curso={curso}/>))}
            </div>
          </article>
        </section>
        <section>
          <FormAlumno/>
        </section>
        <hr />
        <section>
          <FormProfesor/>
        </section>
      </div>
    </>
  );
};

export default HomeAdmin;
