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

  
  const [fullURL, setFullURL] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e)=>{
    e.preventDefault();

  
    try {

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
        setFullURL('');
        
        const allUrlList = [...allUrls];
        allUrlList.shift(data);
        setAllUrls(...allUrlList)
                

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



        <div className="myInputHolder">            
          <label htmlFor="fullURL">Type your URL <span className="red-text">(Required)</span></label>
          <div>
            <input type="text" name="fullURL" value={ fullURL } onChange={ e=> setFullURL(e.target.value) } required />
          </div>
        </div>






        <div className="myBtnsHolder right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light myCornerless">
            <i className="fab fa-send"></i> Shorten
          </button>
          
        </div>


        

        
      </form>
    </div>
  )

}

export default URLForm
