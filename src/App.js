import './App.css';
import { Component } from 'react';


function clicked(){
  alert('THis')
}

class Button extends Component{
  render(){
    return <button onClick={clicked} >Button</button>
  }
}




function App() {
  return (
    <div>
        <Button />
        <Button />
        <Button />
        <Button />
        
    </div>

  );
}

export default App;
