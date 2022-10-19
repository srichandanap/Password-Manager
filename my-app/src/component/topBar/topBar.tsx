import React from 'react'
import "./topBar.css";
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/icons/sync.png';
import profile from '../../assets/icons/profile.png';


const topBar = () => {
  return (
    <div className="headerBar">
  <div className='pass_logo'>

        <img src={pass_logo} alt="pass_logo" />

  </div>
    
      <div className="headIcon">
       
          <img src={sync} alt="image" /> 
          <img src={profile} alt="image" />
      
      </div>
    </div>
  )
}

export default topBar;
