import M from 'materialize-css'
import '../../styles/ActionPage.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
 


import MyWelcome from '../../helpers/MyWelcome'




function ActionPage() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  
  return (
    <div className="container" >
      <MyWelcome title="Welcome!"/>      
    </div>
  )
}

export default ActionPage
