import React from 'react';
import './button.css';


function Button(props: any) {
  return (
    <div>
     
       <button className='submit'  onClick={props.onClick} >
        <text className='btn'>{props.value} </text>
       </button>


      
    </div>
  )
}

export default Button;
