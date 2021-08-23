const AdventagesCard = (props) => {
  return (
    <>
      <div className="mwidth26p marb50px">
        <img src={props.icon} alt="" />
        <h3 className="mar64">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default AdventagesCard;
