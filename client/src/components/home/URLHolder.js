import M from 'materialize-css'
import '../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { usePaginatedQuery } from 'react-query'
 
 





import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { URLContext } from '../../contexts/subContexts/URLContext'



import UserListItem from './URLItem'
import MyLoader from '../../helpers/MyLoader';






const getAllUrls = async ()=>{
  

  const allUrlRes = await fetch('/shortURL/all');
  const allUrlData = await allUrlRes.json();

  console.log(allUrlData);
  return allUrlData
}





function URLHolder() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  const { allUrls, setAllUrls } = useContext(URLContext)
  const history = useHistory()
  


  const { resolvedData, latestData, status } = usePaginatedQuery("allurls", getAllUrls)
  if(resolvedData) setAllUrls(resolvedData);




  return !allUrls[0] ?  (
    <MyLoader/>
  ) : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">All users</h6>


      <ul>
        {
          allUrls[0] && allUrls.map((item, index)=>{
            return (
              <Link to={ "/userProfile/" + index } key={ index } >
                <UserListItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default URLHolder
