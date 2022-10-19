import React from 'react';
import './input.css';


function Input(props: any) {
  return (
    <div>
     
       <input className="field" required type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} />


      
    </div>
  )
}

export default Input;
