import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const LoginAdmin = ({ estado,setRol }) => {
  const userRol = "Administrador";
  const navigate = useNavigate();
  // if (estado) {
  //   navigate("/loginAdmin/homeAdmin");
  // }
  // const existensiaUsuario=(data)=>{
  //   console.log('Se hace una peticion post al usuario:  ', data,'\n con el rol: ',userRol);
  //   setRol(userRol)
  // }
  const manejarClick=(form)=>{
      navigate("/loginAdmin/homeAdmin")
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
