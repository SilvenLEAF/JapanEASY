import M from 'materialize-css'
import '../../styles/home/Home.scss';


import React, { useEffect } from 'react'

import URLForm from './URLForm';
import URLHolder from './URLHolder';
 
 




function Home() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  

  
  return (
    <div className="container" >

      <URLForm/>
      <URLHolder/>    


      
    </div>
  )
}

export default Home
