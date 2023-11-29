import { useState } from "react"
import './LoginForm.css'
const initialForm={
    user:"",
    password:""
}
const LoginForm=({userRol,existensiaUsuario,manejarClick})=>{

    const [form,setForm]=useState(initialForm);


    const handleChange=(e)=>{
       setForm({
        ...form,
        [e.target.name]:e.target.value
       })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        manejarClick(form)
    }

    return(
        <div className="containerForm">
         <h2>Login {userRol}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="">Usuario</label>
            <input type="text" name="user" placeholder="Inrgrese su usario" onChange={handleChange} value={form.user}/>
            <label htmlFor="">Contraseña</label>
            <input type="password" name="password"  placeholder="Ingrese su password" onChange={handleChange} value={form.passsword}/>
            <input type="submit" value={"Ingresar"} />
          </form>
        </div>
    )
}
export default LoginForm