import { useState } from "react";

function Input(props){
    return <input type='number' value={props.value} onChange={props.getInput}></input>
}

export default Input;