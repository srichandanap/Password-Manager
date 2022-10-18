import React from 'react';
import "../signIn/signIn.css";
import SignUpCard from '../../component/signUpCard/signUpCard';
import Card from '../../component/card/card';

const SignUp = () => {
  return (
    <>
     <div className="box">
     <div className="rectangle">
    <Card />
    < SignUpCard />
    </div>
    </div>
  

    </>
  )
}

export default SignUp;