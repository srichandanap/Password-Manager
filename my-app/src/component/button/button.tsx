import React from 'react';
import './button.css';


function Button(props: any) {
  return (
    <div>
     
       <button className='submit'  onClick={props.onClick}  >
        <span className='btn'>{props.value} </span>
       </button>


      
    </div>
  )
}

export default Button;
