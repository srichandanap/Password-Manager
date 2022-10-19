import React from 'react';
import SideBar from '../../component/sideBar/sideBar';
import TopBar from '../../component/topBar/topBar';
import HomePage from '../../component/homePage/homePage';


const Site = () => {
  return (
    <>
   <div className='mainContainer'>

        <SideBar />
        <TopBar /> 
        {/* <HomePage /> */}
   
   </div>
  

    </>
  )
}

export default Site;
