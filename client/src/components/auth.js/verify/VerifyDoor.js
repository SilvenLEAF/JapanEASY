import M from 'materialize-css'
import '../../../styles/VerifyDoor.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




function VerifyDoor() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  
  return (
    <div className="container myVerifyDoorPage">
      <h5 className="pageTitle red-text center-align">Account NOT verified!</h5>

      <p>
        Your account is NOT verified. You must verify your account to continue. Click on the Verify Button to verify your account.
      </p>

      <p>
        <span className="red-text">alvenleaf@gmail.com</span> Not your mail? Click on the Change Email Button to change your email.
      </p>

      <div className="myBtnsHolder right-align">
        <button className="btn myBtn myCornerless">Verify Account</button>
        <button className="btn mySecondaryBtn myCornerless">Change Email</button>
      </div>
      
    </div>
  )
}

export default VerifyDoor
