const PriorityCard = (props) => {
  return (
    <>
      <div className="mwidth20p marb50px">
        <img src={props.icon} alt="" />
        <div className="mheight160px mar64 priority_card">
          <h3 className="mar28">{props.title}</h3>
          <p>{props.text}</p>
          <a href="/">{props.link}</a>
        </div>
      </div>
    </>
  );
};

export default PriorityCard;
