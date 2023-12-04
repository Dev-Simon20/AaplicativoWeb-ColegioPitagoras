import './App.css'
import Informativo from './pages/Informativo'
import LoginAdmin from './pages/LoginAdmin'
import LoginAlumno from './pages/LoginAlumno'
import LoginProfesor from './pages/LoginProfesor'
import Header from './components/Header'
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from 'react'
import HomeAdmin from './pages/HomeAdmin'
import HomeAlumno from './pages/HomeAlumno'
import NotasAlumno from  './pages/NotasAlumno'
import HomeProfesor from './pages/HomeProfesor'
import ListaAlumnos from './pages/ListaAlumnos'
import Calificacion from './pages/Calificacion'



function App() {
  // Las constante de useState de estado y rol, servira como verificacion para las rutas 
  const [estado,setEstado]=useState(false);
  const [rol,setRol]=useState('');
  const [u,setU]=useState('');
  const [cursoNav,setCursoNav]=useState('');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Informativo/>}/>
          <Route path='/loginAdmin' element={<LoginAdmin setRol={setRol} estado={estado}/>}/>
          <Route path="/loginAdmin/homeAdmin" element={<HomeAdmin estado={estado} rol={rol}/>}/>

          <Route path='/loginAlumno' element={<LoginAlumno estado={estado} setEstado={setEstado} setRol={setRol} setU={setU}/>}/>
          
          <Route path="/loginAlumno/homeAlumno" element={<HomeAlumno
          setEstado={setEstado} estado={estado} rol={rol} u={u}/>}/>

          <Route path="/loginAlumno/homeAlumno/notasAlumno/:id" element={<NotasAlumno u={u} setEstado={setEstado} estado={estado}/>} />



          <Route path='/loginProfesor' element={<LoginProfesor estado={estado} setEstado={setEstado} setU={setU}/>}/>
          <Route path='/loginProfesor/homeProfesor' element={<HomeProfesor estado={estado} setCursoNav={setCursoNav} u={u} setEstado={setEstado}/>}/>

          <Route path="/loginProfesor/homeProfesor/listaAlumnos/:id"
           element={<ListaAlumnos cursoNav={cursoNav}/>}/>
           <Route path="/loginProfesor/homeProfesor/listaAlumnos/calificacion/:id/:idCurso"
           element={<Calificacion/>}/>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
