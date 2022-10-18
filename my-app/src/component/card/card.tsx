import react from "react";
import "./card.css";
import logo from "../../assets/images/logo.png";


const Card = () => {


    return (
        <>

            <div className="left">
                <img className="logo" src={logo} alt="Logo" />
                <p>Protect & Manage every password in your business</p>
            </div>
            <div className="line"></div>

        </>
    );
};

export default Card;