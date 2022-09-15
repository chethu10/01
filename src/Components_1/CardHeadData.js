import CardHead from "./CardHead";
import {HeadData}from '../Util/mockData'

function CardHeadData() {
  return (
    <div>
      {HeadData.map((item) => (
        <CardHead number={item.number} image={item.image} />
      ))}
    </div>
  );
}
export default CardHeadData;
