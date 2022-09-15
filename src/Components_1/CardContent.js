import './CardContent.css'

function CardContent(props){
    return(
        <div>
            <div className="hedding">{props.hedding}</div>
           <div className='content'> {props.content}</div>
        </div>
    )
}
export default CardContent;