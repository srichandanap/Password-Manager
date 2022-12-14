import React, { useState } from 'react'
import "./signInCard.css";
import eye from "../../assets/icons/eye_on.png";
import Input from "../input/input";
import { Link } from 'react-router-dom';
import Button from '../button/button';
import "../../styles/import.css";

const SignInCard = () => {

    const [passwordType, setPasswordType] = useState<boolean>(false);

    const togglePassword = () => {

        setPasswordType(!passwordType);

    };

    return (
        <>
            <div className="right">
                <form  action="/site">
                    <p className="signIn">sign in to your account</p>
                    <div className='input' >

                        <Input placeholder='Mobile Number' type='tel' />

                        <div className='pinField'>

                            <Input type={passwordType ? "text" : "password"} placeholder='Mpin' />
                            <img className="eye" src={eye} alt="eye" onClick={togglePassword} />

                        </div>

                    </div>
                    <p className="forgot"> Forgot your password? </p>

                    <div className='button'>

                            <Button value='sign in' type='submit'  />

                    </div>
 
                    <div className='dont-have-a-account'>Don't have a Account? <Link to="/SignUp"> SIGNUP</Link></div>
            

                </form>
            </div>
        </>
    )
}

export default SignInCard;

