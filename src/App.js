
import './App.css';
import PropsPractice from './PropsPractice';

function App() { 
  const jim={
    name:"jim",
    age:30,
    email: "jhethu@gmail.com",
    isMarried:false,
    children:["tom","jerry","perry"]
  };
  const tim ={
    name:"tim",
    age:36,
    email: "thethu@gmail.com",
    isMarried:false,
    children:["dom","derry"]
  };
  const rim={
    name:"rim",
    age:36,
    email: "rhethu@gmail.com",
    isMarried:false,
    children:[]
  };
  const pim={
    name:"pim",
    age:62,
    email: "phethu@gmail.com",
    isMarried:false,
    children:["som"]
  };
  const mim={
    name:"mim",
    age:62,
    email: "mhethu@gmail.com",
    isMarried:false,
    children:["dim","brad","chad"]
  };

  return (
    <div className='app'>
   <PropsPractice person={jim}/>
   <PropsPractice person={tim}/>
   <PropsPractice person={rim}/>
   <PropsPractice person={pim}/>
   <PropsPractice person={mim}/>
   </div>
  )
}

export default App;
