import React from 'react'
import "./signUpCard.css";
import eye from "../../assets/icons/eye_on.png";
import Input from "../input/input";


const SignUpCard = () => {
    return (
        <>
            <div className="right">
                <form>
                    <p className="signUp">sign up</p>
                    <div className='input'>
                        <Input placeholder='Enter Mobile Number' />
                        <Input placeholder='Enter 4 Digit Mpin' />
                        <div className='pinField'>
                            <Input placeholder='Re-Enter 4 Digit Mpin' />
                            <img className= 'eye' src={eye} alt="eye" />
                        </div>

                    </div>
                    <div>
                        <button className='submit'><span className="btn">sign up</span></button>
                    </div>

                </form>
            </div>
        </>
    )
}


export default SignUpCard;