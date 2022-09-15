import './Comp2Data.css';
function Comp2Data(props){
    return(
        <div>
        <img className="pic" src={props.picture} alt=""></img>
        <div className='title'>{props.title}</div>
        <div className='cont'>{props.cont}</div>
        </div>
    )
}
export default Comp2Data;