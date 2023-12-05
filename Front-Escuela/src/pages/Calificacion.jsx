import { useNavigate, useParams } from "react-router-dom";
import "./Calificacion.css";
import { helphttp } from "../Helpers/helphttps";
import { useEffect, useState } from "react";
import HeadHome from "../components/HeadHome";

const Calificacion = ({estado,setEstado}) => {
  const navigate = useNavigate();
  const [notas, setNotas] = useState([]);
  const cod_alumno = useParams().id;
  const cod_curso = useParams().idCurso;
  const [promedio, setPromedio] =useState(0);

  const api = helphttp();
  const url = `http://localhost:3000/loginProfesor/cursos/lista/notas/${cod_curso}/${cod_alumno}`;
  useEffect(() => {
    api.get(url).then((data) => {
      console.log(data);
      setNotas(data);
    });
  }, []);
  useEffect(()=>{
    console.log('El tipoes: ',typeof notas.bim_1);
    setPromedio((notas.bim_1+notas.bim_2+notas.bim_3+notas.bim_4)/4)
  },[notas])
  const clickk = () => {
    navigate(-1);
  };

   useEffect(()=>{
    !estado&&navigate('/loginProfesor');
  },[estado]);


  const handlechange = (e) => {
    setNotas({
      ...notas,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const guardarRegistro = () => {
    console.log(notas.bim_1, notas.bim_2, notas.bim_3, notas.bim_4);
    let data = {
      bim_1: notas.bim_1,
      bim_2: notas.bim_2,
      bim_3: notas.bim_3,
      bim_4: notas.bim_4,
    };
    let opt = { body: data, headers: { "content-type": "application/json" } };
    let endP = `http://localhost:3000/loginProfesor/cursos/lista/notas/put/${cod_curso}/${cod_alumno}`;
    api.put(endP, opt).then((data) => {
      console.log(data);
    });
  };
  
  const handleBack=()=>{
     navigate(-1)
  }
  return (
    <> 
       <HeadHome setEstado={setEstado} handleBack={handleBack}></HeadHome>
      <button>Alumno: {notas.nombre_alumno} {notas.ap_paterno} {notas.ap_materno}</button>
      <section className="botones">
        <button className="boton-curso">
          <p>{notas.nombre_curso}</p>
        </button>
        <button onClick={clickk} className="boton-back">
          Regresar a mis Cursos
        </button>
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
              <td>
                {notas.nombre_alumno} {notas.ap_paterno} {notas.ap_materno}
              </td>
              <td>
                <input
                  type="number"
                  name="bim_1"
                  value={notas.bim_1}
                  onChange={handlechange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bim_2"
                  value={notas.bim_2}
                  onChange={handlechange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bim_3"
                  value={notas.bim_3}
                  onChange={handlechange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bim_4"
                  value={notas.bim_4}
                  onChange={handlechange}
                />
              </td>
              <td>
                <p>{promedio}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <button className="coment-buton">Comentario del profesor</button>
      <div className="coment"></div>
      <div className="cont-bt">
        <button className="coment-buton" id="save" onClick={guardarRegistro}>
          Guardar Notas
        </button>
      </div>
    </>
  );
};

export default Calificacion;
