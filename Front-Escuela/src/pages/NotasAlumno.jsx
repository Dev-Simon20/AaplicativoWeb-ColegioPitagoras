import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NotasAlumnos.css"
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

const NotasAlumno = () => {
  const [curso, setCursos] = useState(cursosTemp);
  const navigate = useNavigate();
  const [option, setOption] = useState();
  let ident = parseInt(useParams().id) - 1;

  const handleBack = () => {
    navigate(-1);
  };
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  return(
    <div className="notas">
      <div className="dash-head">
        <h2 className="dash-head-tit" onClick={handleBack}>
          Colegio Pitagoras
        </h2>
        <select className="dash-head-opt" name="" id="" onChange={handleChange}>
          <option value=""></option>
          <option value="logout">LogOut</option>
          <option value="perfil">Perfil</option>
        </select>
      </div>
      <section className="botones">
          <button className="boton-curso"><h3>{curso[ident].nombre}</h3></button>
          <button className="boton-back" onClick={handleBack}>Regresar a mis Cursos</button>
      </section>
      <section className="cuadro-notas">
      <table className="table-notas">
            <thead>
              <tr>
                <th></th>
                <th>Biemestre 1</th>
                <th>Biemestre 2</th>
                <th>Biemestre 3</th>
                <th>Biemestre 4</th>
                <th>Nota final</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simon Contreras Hugo</td>
                <td>20</td>
                <td>18</td>
                <td>14</td>
                <td>13</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
      </section>
      <button className="coment-buton">Comentario del profesor</button>
      <div className="coment">
        <p>Comentario del profesor</p>
      </div>
    </div>
  )
};

export default NotasAlumno;
