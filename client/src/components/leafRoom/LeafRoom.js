import M from 'materialize-css'
import '../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { usePaginatedQuery } from 'react-query'
 
 





import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { URLContext } from '../../contexts/subContexts/URLContext'



import URLDeleteItem from './URLDeleteItem'
import MyLoader from '../../helpers/MyLoader';






const getAllUrls = async ()=>{
  

  const allUrlRes = await fetch('/shortURL/all');
  const allUrlData = await allUrlRes.json();

  console.log(allUrlData);
  return allUrlData
}





function LeafRoom() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  const { allUrls, setAllUrls } = useContext(URLContext)
  const history = useHistory()
  


  const { resolvedData, latestData, status } = usePaginatedQuery("allurls", getAllUrls)
  if(resolvedData) setAllUrls(resolvedData);


  if(!userData) history.push('/login');
  if(userData && !userData.isVerified) history.push('/verifyDoor');
  if(userData && userData.role !== 'admin') history.push('/roleDoor');


  return !allUrls[0] ?  (
    <div className="myLoaderPageHolder">
      <MyLoader/>
    </div>
  ) : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">All Shortened URLs (Click to delete)</h6>


      <ul>
        {
          allUrls[0] && allUrls.map((item, index)=>{
            return (
              <URLDeleteItem item={ item } index={ index } key={ index }
              allUrls={ allUrls } setAllUrls={ setAllUrls }
              />
            )
          })
        }
      </ul>



    </div>
  )
}

export default LeafRoom
