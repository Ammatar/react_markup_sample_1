const BodyCard = (props) => {
  return (
    <>
      <div className="mwidth26p marb50px">
        <img src={props.img} alt="" />
        <div className="mheight220px mar64 priority_card">
          <h3> {props.header}</h3>
          <p>{props.text}</p>
          <a href="/">{props.link}</a>
        </div>
      </div>
    </>
  );
};

export default BodyCard;
