import logo from './logo.svg';
import './App.css';

function App() {
  
  let a=10,b=23,sum=0;
  sum=a+b;
  let miss;
  if(sum!=0){
    miss=<button>Sum Got</button>
  }
  else{
    miss=<button>Summm Zero</button>
  }
  return(
    <div>
      {miss}
    </div>
  );
}

export default App;
