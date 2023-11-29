import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
const LoginProfesor = ({ estado }) => {
  const navigate = useNavigate();
  const estilos = {
    paddingTop: "50px",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
  };
  const manejarClick = (form) => {
    navigate("/loginProfesor/homeProfesor");
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
