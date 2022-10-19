import React , {useState} from 'react'
import "./signUpCard.css";
import eye from "../../assets/icons/eye_on.png";
import Input from "../input/input";
import Button from '../button/button';
import "../../styles/import.css";


const SignUpCard = () => {

    const [passwordType, setPasswordType] = useState<boolean>(false);
     
        const togglePassword = () => {
            
            setPasswordType(!passwordType);

        };

    return (
        <>
            <div className="right">
                <form>
                    <p className="signUp">sign up</p>
                    <div className='input'>
                        <Input placeholder='Enter Mobile Number' />
                        <Input placeholder='Enter 4 Digit Mpin' />
                        <div className='pinField'>
                            <Input type={passwordType ? "text" : "password"} placeholder='Re-Enter 4 Digit Mpin' />
                            <img className= 'eye' src={eye} alt="eye" onClick={togglePassword}  />
                        </div>

                    </div>
                    <div className='bt'>
                    <Button value='sign up' />
                    </div>

                </form>
            </div>
        </>
    )
}


export default SignUpCard;