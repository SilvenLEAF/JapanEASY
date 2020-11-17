import M from 'materialize-css'
import '../../styles/AuthDoor.scss'
import '../../styles/AuthForm.scss'


import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { Toast } from '../../helpers/MyAlerts'




function LogInForm() {
  useEffect(()=>{
    M.AutoInit();
  })
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const history= useHistory();

  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  


  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try {
      
    Toast.fire({
      icon: 'info',
      title: 'Logging in...Please wait...'
    })

    const oldUser = {};
    if(email) oldUser.email = email;
    if(password) oldUser.password = password;
    
    

    


    const loginRes = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(oldUser)
    });
    const loginData = await loginRes.json();

    console.log(loginData)


    
    const loggedInUserRes = await fetch('/user');
    const loggedInUserData = await loggedInUserRes.json();

    console.log(loggedInUserData); 
    
    if(loggedInUserData.user){
      setUserData(loggedInUserData.user);
      history.push('/');
    } else {
      Toast.fire({
        icon: 'error',
        title: loggedInUserData.msg
      })    
    }
    } catch (err) {
      Toast.fire({
        icon: 'error',
        title: err.msg
      })    
    }

  }


  if(userData) history.push('/');


  return (
    <div className="container myAuthForm" >
      <div className="myAuthAppName">LingHun</div>
      <div className="myAuthTitle">Log in to your account</div>
      


      <form onSubmit={ handleSubmit } >
        <div className="input-field">
          <i className="prefix fa fa-envelope"></i>
          <input type="email" value={ email } onChange={ e=> setEmail(e.target.value) } required />
          <label htmlFor="email">Email <span className="red-text">(Required)</span></label>
        </div>

        


        <div className="input-field">
        <i className="prefix material-icons">memory</i>
          <input type="password" required autoComplete="off" value={ password } onChange={ e=> setPassword(e.target.value) } />
          <label htmlFor="password">Password <span className="red-text">(Required) </span> </label>
        </div>


        

        
        <div className="input-field right-align">
          <button className="btn myBtn waves-effect waves-light">
            Log in
          </button>          
        </div>


 
        <div className="myAuthFormFooter">
          <p>
            Forgot password? <Link to="/forgotten">Reset password</Link>
          </p>
          <p>
            Need an account? <Link to="/signup">Sign up</Link>
          </p> 
        </div>


        
      </form>
    </div>
  )
}

export default LogInForm
