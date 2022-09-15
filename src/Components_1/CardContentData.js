import {HeadContent}from '../Util/mockData'
import CardContent from './CardContent';
function CardContentData() {
  return(
    <div>
      {HeadContent.map((item) => (
        <CardContent hedding={item.hedding}
        content={item.content}/>
      ))}
    </div>

  )
}
export default CardContentData;
