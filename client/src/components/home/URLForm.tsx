import M from 'materialize-css'
import './../../styles/Form.scss'
import '../../styles/home/URLForm.scss';


import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
 
 
import { URLContext } from '../../contexts/subContexts/URLContext'
import { Toast } from '../../helpers/MyAlerts'











function URLForm() {
  useEffect(() => {
    M.AutoInit();
  }, [])




  const { allUrls, setAllUrls } = useContext(URLContext);

  
  const [unrefinedFullURL, setUnrefinedFullURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>)=>{
    e.preventDefault();

    Toast.fire({
      icon: 'info',
      title: 'Please wait...'
    })

  
    try {
      const regeX =/http(s)?:\/\//
      const fullURL = (unrefinedFullURL.search(regeX) !== -1) ? unrefinedFullURL : "https://" + unrefinedFullURL
    
      const response = await fetch('/shortURL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullURL })
      });
  
      const data = await response.json();
      console.log(data);
      
      
      if(data.error){
        setError(data.msg);
      } else {
        setUnrefinedFullURL('');
       
        setShortURL(data.short);
        
                

      }

  
  
  
      
    } catch (err) {
      console.log(err)

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





  return (
    <div className= "container" >



      <form onSubmit= { handleSubmit } className="myDefaultForm myURLForm" >
        <h6 className="myDefaultFormName" >Shorten your URL</h6>



        <div className="myInputHolder myURLFormBtnHolder">            
          <label htmlFor="fullURL">Type your URL <span className="red-text">(Required)</span></label>
          <div>
            <input type="text" name="fullURL" value={ unrefinedFullURL } onChange={ e=> setUnrefinedFullURL (e.target.value) } required />
          </div>
        </div>






        <div className="myBtnsHolder right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light myCornerless">
            <i className="fab fa-send"></i> Shorten
          </button>
          
        </div>


        

        {
          shortURL && (
            <div className="myDefaultFormFooter">
              <h6>
                Your URL is <a href={ '/shortURL/' + shortURL } target="_blank" rel="noopener noreferrer">
                  { shortURL }
                </a>
              </h6>
              
            </div>
          )
        }
      </form>
    </div>
  )

}

export default URLForm
