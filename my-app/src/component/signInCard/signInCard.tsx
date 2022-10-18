import React from 'react'
import "./signInCard.css";
import eye from "../../assets/icons/eye_on.png";
import Input from "../input/input";
import { Link } from 'react-router-dom';



const SignInCard = () => {
    return (
        <> 
       <div className="right">
            <form>
                <p className="signIn">sign in to your account</p>
                <div className='input'>
                    {/* <input type='text' placeholder="Mobile Number" className="mobile-field" /> */}
                    <Input placeholder='Mobile Number' />

                    <div className='pinField'>
                        {/* <input type='password' placeholder="Mpin" className="mpin-field" /> */}
                        <Input placeholder='Mpin' />
                        <img className="eye" src={eye} alt="eye" />   
                    </div>
                    
                </div>
                <p className="forgot">Forgot your password?</p>

                <div>
                    <button className='submit'><span className="btn">sign in</span></button>
                </div>
                {/* <div className='dont-have-account'><p className="dont-have-a-account">Don't have a Account? <Link to="/SignUp">SIGNUP</Link></p> </div> */}
                <div className='dont-have-a-account'>Don't have a Account? <Link to="/SignUp"> SIGNUP</Link></div>
            </form>
            </div>
        </>
    )
}

export default SignInCard;

