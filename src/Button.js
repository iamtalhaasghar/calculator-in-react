function Button(props){
    return <button onClick={props.doWork}>{props.name}</button>
}

export default Button;