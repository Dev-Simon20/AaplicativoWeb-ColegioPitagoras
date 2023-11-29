import { useNavigate } from "react-router-dom";
import HeadHome from "../components/HeadHome";

 const HomeProfesor=({estado})=>{
    const navigate=useNavigate()
    // if (!estado) {
    //     navigate('/loginAdmin');
    //  }

    const handleBack=()=>{
        navigate('/loginProfesor')
    }
  
    return(
        <>
        <HeadHome handleBack={handleBack}></HeadHome>
        <h3>Dashboard de Profesor</h3>
        </>
    )
 }

 export default HomeProfesor