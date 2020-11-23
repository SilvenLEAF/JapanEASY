import M from 'materialize-css'
import '../../styles/VerifyDoor.scss';


import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
 
 



import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { Toast } from '../../helpers/MyAlerts'



function RoleDoor() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const [error, setError] = useState('');

  const handleRequestVerification = async ()=>{
    try {
      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })
      
      const response = await fetch('/requestVerification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userData.local.email})
      });
  
      const data = await response.json();
      console.log(data)

      if(data.error) {
        setError(data.msg);
      } else{
        Toast.fire({
          icon: 'success',
          title: 'Check your email for further instructions'
        })
      }
      

      
    } catch (err) {
      console.log(err);
      if(err.error) setError(err.msg)
    }

  }



  useEffect(()=>{
    if(error){
      Toast.fire({
        icon: 'error',
        title: error
      })
    }
  }, [error])




  if(!userData) history.push('/login');
  
  
  
  return (
    <div className="container myVerifyDoorPage" >
      <h5 className="pageTitle red-text center-align">Access Denied!</h5>

      <p>
        This is only for ADMIN. Your are NOT authorized to access this page.
      </p>

      <p>
        If you want to become an Admin of this APP, make a request to SilvenLEAF using the Contact Form.
      </p>

      <div className="myBtnsHolder right-align">
        <Link to="/contact" className="btn myBtn myCornerless">Contact Form</Link>
        <Link to="/" className="btn mySecondaryBtn myCornerless">Go Back Home</Link>
      </div>
      
    </div>
  )
}

export default RoleDoor
