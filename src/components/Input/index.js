import './Input.css';

function Input(props) {
    return (
       <input className='input' type={props.type} placeholder={props.placeholder}></input>
    )
}

export default Input;