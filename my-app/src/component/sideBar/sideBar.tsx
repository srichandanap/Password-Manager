import React from 'react'
import home from '../../assets/icons/home_icn.png'
import menu from '../../assets/icons/burger_menu.png';
import "./sideBar.css";

const sideBar = () => {
  return (
    <div className="container">

                    <div className="menu">

                        <img src={menu} alt="icon" />

                    </div>

                    <div className="home">

                        <img src={home} alt="icon" />

                    </div>

                    <div className="round"></div>

                </div>


  )
}

export default sideBar;
