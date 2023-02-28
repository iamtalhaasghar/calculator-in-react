import "./App.css";
import Button from './Button'
import Result from './Result'
import Input from "./Input";
import { useState } from "react";


function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);
  return (
    <div>
      <h1>Simplest Working Calculator</h1>
      <Result value={result}/>
      <Input value={input} getInput={(event)=>{setInput(event.target.value)}}/>
      <br/>
      <Button name="add" value={input} doWork={()=>{setResult(parseInt(result) + parseInt(input))}}/>        
      <Button name="subtract" doWork={()=>{setResult(parseInt(result) - parseInt(input))}}/>        
      <Button name="multiply" doWork={()=>{setResult(parseInt(result) * parseInt(input))}}/>        
      <Button name="divide" doWork={()=>{setResult(parseInt(result) / parseInt(input))}}/>        
      <Button name="reset input" doWork={()=>{setInput(0)}}/>        
      <Button name="reset result" doWork={()=>{setResult(0)}}/>              
    </div>
  );
}

export default App;
