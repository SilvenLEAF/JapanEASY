import M from 'materialize-css'
import '../../../styles/VerifyDoor.scss';




import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';



import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import { Toast } from '../../../helpers/MyAlerts';











function VerifyEmail() {
  useEffect(() => {
    M.AutoInit();
  }, [])


  const { userData } = useContext(AuthContext);

  const { token } = useParams();
  const history = useHistory();
  



  const [error, setError] = useState('');


  const handleVerify = async (e)=>{
    

    try {
      
      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })
      
      
      const response = await fetch('/verifyEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });
  
      const data = await response.json();

      console.log(data);


      if(data.error) {
        setError(data.msg);
      } else {
        Toast.fire({
          icon: 'success',
          title: 'Account Verified'
        })
  
        history.push('/');
      }
  
  
  
    } catch (err) {      
      console.log(err);

      if(err.error) setError(err.msg);

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
  if(userData && userData.isVerified) history.push('/');


  return (
    <div className="container myVerifyDoorPage">
      <h5 className="pageTitle red-text center-align">Verify your Account</h5>

      <p className="center-align">
        Click below to verify your email
      </p>

      
      <div className="myBtnsHolder center-align">
        <button className="btn myBtn myCornerless" onClick={ handleVerify } >Verify</button>
      </div>
      
    </div>
  )

}

export default VerifyEmail
