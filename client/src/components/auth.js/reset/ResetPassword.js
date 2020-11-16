import M from 'materialize-css'
import './../../../styles/Form.scss'



import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { Link, useHistory, useParams } from 'react-router-dom';










function ResetPassword() {
  useEffect(() => {
    M.AutoInit();
  })



  const { token } = useParams();
  


  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault();
  
    if(confirmPassword !== newPassword) return setError('Type the same password twice');
      
    
    const response = await fetch('/resetPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newPassword, token })
    });

    const data = await response.json();

    console.log(data);



    setNewPassword('');
    swal("See your password", "See your password for further instructions. It may take some time to send the password. Wait 5 to 10mins","success");    
  }









  return (
    <div className= "container">



      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h6 className="myDefaultFormName" >Reset your Password</h6>






        <div className="myInputHolder">            
          <label htmlFor="password">New password <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix material-icons">memory</i>
            <input type="password" name="password" value={ newPassword } onChange={ e=> setNewPassword(e.target.value) } required />
          </div>
        </div>





        <div className="myInputHolder">            
          <label htmlFor="password">Confirm new password <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix material-icons">memory</i>
            <input type="password" name="confirmPassword" value={ confirmPassword } onChange={ e=> setConfirmPassword(e.target.value) } required />
          </div>
        </div>






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light">
            <i className="fa fa-send"></i> Reset
          </button>
          
          <Link to="/forgotten" className= "btn myRedBtn waves-effect waves-light">
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

export default ResetPassword
