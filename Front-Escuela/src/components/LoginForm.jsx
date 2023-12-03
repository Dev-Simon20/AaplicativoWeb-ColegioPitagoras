import { useState } from "react"
import './LoginForm.css'
const initialForm={
    usuario:"",
    contrasena:""
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
            <input type="text" name="usuario" placeholder="Inrgrese su usario" onChange={handleChange} value={form.usuario}/>
            <label htmlFor="">Contraseña</label>
            <input type="password" name="contrasena"  placeholder="Ingrese su password" onChange={handleChange} value={form.contrasena}/>
            <input type="submit" value={"Ingresar"} />
          </form>
        </div>
    )
}
export default LoginForm