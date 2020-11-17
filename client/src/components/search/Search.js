import M from 'materialize-css'
import '../../styles/Form.scss';
import '../../styles/Search.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




function Search() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  
  return (
    <div className="container">
      <h4 className="myPageTitle">Action Button Page</h4>

      
    </div>
  )
}

export default Search
