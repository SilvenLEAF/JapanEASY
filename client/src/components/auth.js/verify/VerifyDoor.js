import M from 'materialize-css'
import '../../../styles/VerifyDoor.scss';


import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { AuthContext } from '../../../contexts/subContexts/AuthContext'




function VerifyDoor() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();


  if(!userData) history.push('/login');
  if(userData && userData.isVerified) history.push('/');
  
  
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
        <Link to="/changeEmail" className="btn mySecondaryBtn myCornerless">Change Email</Link>
      </div>
      
    </div>
  )
}

export default VerifyDoor
