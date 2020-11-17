import M from 'materialize-css'
import './../../../styles/Form.scss'



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import { Toast } from '../../../helpers/MyAlerts'
import swal from 'sweetalert';










function Forgotten() {
  useEffect(() => {
    M.AutoInit();
  }, [])






  
  const [email, setEmail] = useState('');
  


  const handleSubmit = async (e)=>{
    e.preventDefault();

  
    try {

      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })

      const response = await fetch('/forgottenPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
  
      const data = await response.json();
  
      console.log(data);
  
  
  
      setEmail('');
      Toast.fire({
        icon: 'success',
        title: 'Check your email for further instructions'
      })

    } catch (err) {
      Toast.fire({
        icon: 'error',
        title: err.msg || `Oops, failed. Try again`
      })

      console.log(err)
    }
    
    
  }









  return (
    <div className= "container">



      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h6 className="myDefaultFormName" >Forgot your password?</h6>






        <div className="myInputHolder">            
          <label htmlFor="email">Type your Email <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix fa fa-envelope"></i>
            <input type="email" name="email" value={ email } onChange={ e=> setEmail(e.target.value) } required />
          </div>
        </div>






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light">
            <i className="fa fa-send"></i> Send
          </button>
          
          <Link to="/loginForm" className= "btn myRedBtn waves-effect waves-light">
            Back <i className="fa fa-arrow-left"></i>
          </Link>
        </div>


        {/* <div className="myDefaultFormFooter">
          <p>Wanna know more about me?</p>
        </div> */}




        
      </form>
    </div>
  )

}

export default Forgotten
