const ManagerCard = (props) => {
  return (
    <>
      <div className="mwidth230px">
        <img src={props.manager} alt="" />
        <h3>{props.name}</h3>
        <p>{props.city}</p>
        <a href="/">View the Site</a>
      </div>
    </>
  );
};

export default ManagerCard;
