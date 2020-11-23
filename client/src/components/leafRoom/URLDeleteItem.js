import React, { useEffect, useState } from 'react'

import { Toast } from '../../helpers/MyAlerts'





function URLDeleteItem({ item, index, allUrls, setAllUrls }) {

  const [error, setError] = useState('');

  
  const handleDelete = async (e)=>{    

    Toast.fire({
      icon: 'info',
      title: 'Please wait...'
    })

  
    try {
      const urlId = item._id;

      const response = await fetch('/shortURL', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ urlId })
      });
  
      const data = await response.json();
      console.log(data);
      
      
      if(data.error){
        setError(data.msg);
      } else {
                
        const allUrlList = allUrls;
        allUrlList.splice(index, 1);        
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
    <li onClick={ handleDelete } >
    <div className="myUserProfileIcon" style={{background: `url(${ item.profileImage || "/Logo.png" }) center/cover` }}></div>
    <div>
      <div className="myUserName blue-text">
        {item.short}
      </div>

      <p className="grey-text">
        {item.full}
      </p>
    </div>

    <div className="fa fa-trash"></div>

  </li>
  )
}

export default URLDeleteItem
