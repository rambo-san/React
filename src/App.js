import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import Assign from './Assign';
import Counter from './Counter';
import Top from './Top';
import Product from './Product';

function App() {
  return(
    
    <div className='App-header'>
      <h1>Product List</h1>
      <Product product="Laptop" price="999" desc="High performance laptop."/>
      <Product product="Smartphone" price="699" desc="Latest bullcrap laggy phone."/>
      <Product product="Headphone" price="199" desc="Noise cancellation it seems."/>
      {/* <SignUp/> */}
    </div>  
  ) ;
      
}

export default App;
