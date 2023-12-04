import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import {helphttp} from '../Helpers/helphttps'
const LoginProfesor = ({ estado,setEstado,setU}) => {
  const navigate = useNavigate();
  const estilos = {
    paddingTop: "50px",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
  };
  var api=helphttp();
  var url="http://localhost:3000/loginProfesor";
  const manejarClick = (data) => {
    // navigate("/loginProfesor/homeProfesor")
    let opt = { body: data, headers: { "content-type": "application/json" } };
    api.post(url,opt)
    .then((data)=>{
      if(data){
        setEstado(true);
        navigate("/loginProfesor/homeProfesor");
        console.log(data);
        setU(data);
      }
      else{
        console.log('Entrando al else: ', data);
      }
    })
  };
  return (
    <div>
      <Header></Header>
      <div style={estilos}>
        <LoginForm userRol={"Profesor"} manejarClick={manejarClick} />
      </div>
    </div>
  );
};

export default LoginProfesor;
