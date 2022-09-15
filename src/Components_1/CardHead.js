import "./CardHead.css";
function CardHead(props) {
  return (
    <div className="head">
      <div className="number">{props.number}</div>
      <img className="image" src={props.image} alt=""></img>
    </div>
  );
}
export default CardHead;
