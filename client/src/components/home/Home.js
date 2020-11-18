import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'





function Home() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  
  return (
    <div className="container">

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h1 id="myLandingTitle" className="pageTitle">
          LingHun
        </h1>
        
        <div className="myLandingDescription">
          This is the SOUL and LING HUN of my future app. It's the spirit and core for all my future self. It's LING HUN, the SOUL of my future. It's created by SilvenLEAF. I am SilvenLEAF.
        </div>

        <div className="myLandingBtnHolder">
          <Link to="/search" className="btn myBtn waves-effect waves-light myLandingBtn" >
            Ling Hun Action Button
          </Link>
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
