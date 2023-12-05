import Header from "../components/Header"
import './Informativo.css'
import imagen from '../assets/hom.webp'
const Informativo=()=>{

    return(
        <div>
            <Header></Header>
            <main class="main">
      <section className="main-sect">
        <div className="main-sect-coment">
          <p>
            Pitágoras: Donde la educación integral y la guía experta se unen para formar líderes del mañana. Aquí, cada estudiante es una promesa de éxito.
          </p>
          <p id="matri">Matriculate ya!</p>
        </div>
        <div className="main-sect-imag">
        <img src={imagen} alt="Mi Imagen"/>
        </div>
      </section>


    </main>
        </div>
    )
}

export default Informativo