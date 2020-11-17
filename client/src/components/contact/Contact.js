import M from 'materialize-css'
import './../../styles/Form.scss'



import React, { useEffect, useState } from 'react'
import { Toast } from '../../helpers/MyAlerts';










function Contact() {
  useEffect(() => {
    M.AutoInit();    
  }, [])






  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault();
  
    try {
      Toast.fire({
        icon: 'info',
        title: 'Sending...Please wait...'
      })

      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })
    
      const data = await response.json();
      console.log(data)
     
      Toast.fire({
        icon: 'success',
        title: 'Your message is sent.'
      })
    } catch (err) {
     
      Toast.fire({
        icon: 'error',
        title: 'Oops, something went wrong!'
      })
      console.log(err);
    }



    setTitle('');
    setContent('')
    
  }









  return (
    <div className= "container">



      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h3 className="myDefaultFormName" >Contact Me</h3>






        <div className="myInputHolder">            
          <label htmlFor="title">Title <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix fa fa-address-card-o"></i>
            <input type="text" name="contactTitle" value={ title } onChange={ e=> setTitle(e.target.value) } required />
          </div>
        </div>







        <div className="myInputHolder">
        <label htmlFor="content">Content <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix fa fa-edit"></i>
            <textarea name="content" className= "materialize-textarea" value={ content } onChange={ e=> setContent(e.target.value) } required ></textarea>
          </div>
        </div>






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light" id= "myDownloadBtn">
            <i className="fa fa-send"></i> Send
          </button>
        </div>


        <div className="myDefaultFormFooter">
          <p>Wanna know more about me?</p>
          
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="myThemeColorText">SilvenLEAF.github.io</a>
          </p>
        </div>




        
      </form>
    </div>
  )

}

export default Contact
