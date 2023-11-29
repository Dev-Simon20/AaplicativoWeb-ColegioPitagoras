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



function App() {
  const [estado,setEstado]=useState(false);
  const [rol,setRol]=useState('');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Informativo/>}/>
          <Route path='/loginAdmin' element={<LoginAdmin setRol={setRol} estado={estado}/>}/>
          <Route path="/loginAdmin/homeAdmin" element={<HomeAdmin estado={estado} rol={rol}/>}/>

          <Route path='/loginAlumno' element={<LoginAlumno estado={estado}/>}/>
          <Route path="/loginAlumno/homeAlumno" element={<HomeAlumno estado={estado} rol={rol}/>}/>
          <Route path="/loginAlumno/homeAlumno/:id" element={<NotasAlumno/>} />



          <Route path='/loginProfesor' element={<LoginProfesor estado={estado}/>}/>
          <Route path='/loginProfesor/homeProfesor' element={<HomeProfesor estado={estado}/>}/>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
