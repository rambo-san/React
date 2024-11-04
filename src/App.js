import logo from './logo.svg';
import './App.css';

function App() {
  
  const arr=[
    {
      name : "Abhi",
      course : "MCA",
      gender  : "male"

  },
  {
    name : "Shelvin",
    course : "MCA",
    gender  : "male"

  },
  {
    name : "Arya",
    course : "MCA",
    gender  : "trans"

  },
  {
    name : "Joyce",
    course : "MCA",
    gender  : "!male"

  }
  ];
  return(
    
    <div>
      <ul>{
          arr.map((ar)=>{
            return <div>
              <li> Name : {ar.name} | Course : {ar.course}</li>
            </div>
          })
    }
    </ul>
    </div>  
  ) ;
      
}

export default App;
