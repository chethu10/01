import {Comp2Pic, Comp2details} from "../Util/mockData";
import Comp2Data from "./Comp2Data";
function Comp2Image(){
    return(
        <div>
      {Comp2Pic.map((item) => (
        <Comp2Data picture={item.picture}/>
      ))}
      {Comp2details.map((item) => (
        <Comp2Data title={item.title}
        cont={item.cont}/>
      ))}
    </div>
    )
}
export default Comp2Image;