import React from 'react'
import home from '../../assets/icons/home_icn.png'
import menu from '../../assets/icons/burger_menu.png';
import "./sideBar.css";

const sideBar = () => {
  return (
    <div className='container'>
       <img className="menu" src={menu} alt="eye"/>
       <img className="home" src={home} alt="eye"  />
    </div>
  )
}

export default sideBar;
