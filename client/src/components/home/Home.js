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
        <div id="myLandingTitle" className="pageTitle">
          LingHun
        </div>
        
        <div className="myLandingDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit error nihil officiis reiciendis debitis ipsa, placeat doloribus delectus unde omnis saepe facere vitae voluptatibus!
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
