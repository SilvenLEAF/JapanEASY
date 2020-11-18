import M from 'materialize-css'
import '../../../styles/Form.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




function VerifyDoor() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  
  return (
    <div className="container">
      <h4 className="pageTitle">Action Button Page</h4>

      
    </div>
  )
}

export default VerifyDoor
