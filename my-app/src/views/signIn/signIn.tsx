import React from 'react';
import "./signIn.css";
import SignInCard from '../../component/signInCard/signInCard';
import Card from '../../component/card/card';

const SignIn = () => {
  return (
    <>
     <div className="box">
     <div className="rectangle">
    <Card />
    <SignInCard />
    </div>
    </div>
  

    </>
  )
}

export default SignIn;