import "./HeadHome.css"
const HeadHome = ({handleBack,setEstado}) => {
  const handleSesion=(e)=>{
    console.log(e.target.value);
    if(e.target.value=='logout'){
      setEstado(false);
    }
  }
  return (
    <div className="dash-head">
      <div className="content-log">
        <img src="../../public/vite.svg" alt="" />
        <h2 className="dash-head-tit" onClick={handleBack}>
        Colegio Pitagoras
      </h2></div>
      <select className="dash-head-opt" name="" id="" onChange={handleSesion}>
        <option value="">Seleccionar</option>
        <option value="logout">LogOut</option>
        <option value="perfil">Perfil</option>
      </select>
    </div>
  );
};

export default HeadHome
