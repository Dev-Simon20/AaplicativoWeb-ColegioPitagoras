import "./HeadHome.css"
const HeadHome = ({handleBack}) => {
  return (
    <div className="dash-head">
      <h2 className="dash-head-tit" onClick={handleBack}>
        Colegio Pitagoras
      </h2>
      <select className="dash-head-opt" name="" id="">
        <option value=""></option>
        <option value="logout">LogOut</option>
        <option value="perfil">Perfil</option>
      </select>
    </div>
  );
};

export default HeadHome
