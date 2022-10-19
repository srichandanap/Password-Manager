import React from 'react'
import "./toast.css";

function Toast() {
  return (
    <>
    <div className="toastBar">
        <div className="toastMsg">"Congrats!!! Success, Signin to access the valut"!</div>
        <div className="toastClose">x</div>
    </div>
    </>
  )
}

export default Toast;