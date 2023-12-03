import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NotasAlumnos.css"
import HeadHome from "../components/HeadHome";
import {helphttp} from '../Helpers/helphttps'
const cursosTemp = [
  {
    id: 1,
    nombre: "Programación en Python",
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

const NotasAlumno = ({u,setEstado,estado}) => {
  
  const [parametro,setParametro]=useState(useParams().id);
  const navigate = useNavigate();
  const [cur,setCur]=useState([]);
  
  var api=helphttp();
  var url=`http://localhost:3000/loginAlumno/1000001/${parametro}`
  useEffect(()=>{
    api.get(url).then((data)=>{
      console.log(data);
      setCur(data)
    })
  },[]);
  useEffect(()=>{
    !estado&&navigate('/loginAlumno');
  },[estado]);
  

  const handleBack = () => {
    navigate('/loginAlumno/homeAlumno');
  };
  return(
    <div className="notas">
      <HeadHome handleBack={handleBack} setEstado={setEstado}></HeadHome>
      <section className="botones">
          <button className="boton-curso"><p>{cur.nombre}</p></button>
          <button className="boton-back" onClick={handleBack}>Regresar a mis Cursos</button>
      </section>

      <section className="cuadro-notas">
      <table className="table-notas">
            <thead>
              <tr>
                <th className="th-ocult"></th>
                <th>Biemestre 1</th>
                <th>Biemestre 2</th>
                <th>Biemestre 3</th>
                <th>Biemestre 4</th>
                <th>Nota final</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{u.nombre}</td>
                <td>{cur.nota1==null?'--':cur.nota1}</td>
                <td>{cur.nota2==null?'--':cur.nota2}</td>
                <td>{cur.nota3==null?'--':cur.nota3}</td>
                <td>{cur.nota4==null?'--':cur.nota4}</td>
                <td>{cur.nota4==null?'--':(cur.nota1+cur.nota2+cur.nota3+cur.nota4)/4}</td>
              </tr>
            </tbody>
          </table>
      </section>


      <button className="coment-buton">Comentario del profesor</button>
      <div className="coment">
        <p>El alumno esta teniendo un rendimiento.....</p>
      </div>
    </div>
  )
};

export default NotasAlumno;
