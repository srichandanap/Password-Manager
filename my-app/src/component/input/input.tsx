import React from 'react';
import './input.css';


function Input(props: any) {
  return (
    <div>
     
       <input className="field" type="text" placeholder={props.placeholder} />


      
    </div>
  )
}

export default Input;
