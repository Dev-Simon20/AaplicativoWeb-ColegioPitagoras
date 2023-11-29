import { useNavigate } from "react-router-dom";
import HeadHome from "../components/HeadHome";

 const HomeAdmin=({estado})=>{
    const navigate=useNavigate()
    // if (!estado) {
    //     navigate('/loginAdmin');
    //  }
    const handleBack=()=>{
        navigate('/loginAdmin')
    }
  
    return(
        <>
        <HeadHome handleBack={handleBack}></HeadHome>
        <h3 className="ho">Dashboard de Admin</h3>
        </>
    )
 }

 export default HomeAdmin