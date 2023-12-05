import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const LoginAdmin = ({ estado,setRol,setEstado }) => {
  const userRol = "Administrador";
  const navigate = useNavigate();
  const manejarClick=(form)=>{
    if(form.usuario=='admin123'&& form.contrasena=='admin'){
      setEstado(true);
      navigate("/loginAdmin/homeAdmin")
    }
    else{
      alert('Usuario incorrecto')
    }
  }

  const estilos = {
    paddingTop: "50px",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
        <Header></Header>
        <div style={estilos}>
        <LoginForm userRol={userRol} manejarClick={manejarClick}  />
        </div>
    </div>
  );
};

export default LoginAdmin;
