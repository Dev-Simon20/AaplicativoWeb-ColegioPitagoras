import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import {helphttp} from '../Helpers/helphttps'
import { useEffect } from "react";


const LoginAlumno = ({ estado,setEstado,setRol,setU }) => {
  const navigate=useNavigate();
  useEffect(()=>{
    estado&&navigate('/loginAlumno/homeAlumno');
  },[])


  var api=helphttp();
  var url="http://localhost:3000/loginAlumno"
  const estilos = {
    paddingTop: "50px",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
  };

  const manejarClick=(data)=>{
    // navigate("/loginAlumno/homeAlumno")
    let opt = { body: data, headers: { "content-type": "application/json" } };
    api.post(url,opt)
    .then((data)=>{
      if(data){
        setEstado(true);
        setRol('alumno');
        setU(data);
        navigate("/loginAlumno/homeAlumno");
      }
      else{
        console.log('Entrando al else: ', data);
      }
    })
}
  return (
    <div>
      <Header></Header>
      <div style={estilos}>
        <LoginForm userRol={"Alumno"} manejarClick={manejarClick} />
      </div>
    </div>
  );
};

export default LoginAlumno;
