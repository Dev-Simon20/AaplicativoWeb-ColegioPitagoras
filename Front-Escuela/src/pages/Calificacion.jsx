import { useNavigate, useParams } from "react-router-dom";
import "./Calificacion.css";

const Calificacion = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const idCurso = useParams().idCurso;
  const clickk = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>Estas navegando al alumno con id: {id}</h1>
      <h2>Estas NAvengando al curso con id:{idCurso}</h2>
      <section className="botones">
        <button className="boton-curso">
          <p>curso</p>
        </button>
        <button className="boton-back">Regresar a mis Cursos</button>
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
              <td>Ñahui Ormeño Danielle</td>
              <td>
                <input type="number"  max={20}/>
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <button className="coment-buton">Comentario del profesor</button>
      <div className="coment">
        <input type="text" />
      </div>
      <div className="cont-bt">
        <button className="coment-buton" id="save">
          Guardar Notas
        </button>
      </div>
    </>
  );
};

export default Calificacion;
