import PropTypes from "prop-types";

function PropsPractice({ person }) {
  // return (`In 5 years ${name} will be ${age}`)
  return (
    <div className="prop">
      <div><h1> {person.name}</h1></div>
      <div>{person.age}</div>
      <div>{person.email}</div>
      <div>{person.isMarried}</div>
      <div><h2>Childrens:</h2></div>
      <ul>
        {person.children.map((child,key)=>{
            return<li key={key}>{child}</li>
        })}
      </ul>
    </div>
  );
}

PropsPractice.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string, 
    isMarried:PropTypes.bool,
    children:PropTypes.arrayOf(PropTypes.string)
  }),
};
export default PropsPractice;
