import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Toast } from '../../helpers/MyAlerts';




function Home() {
  useEffect(()=>{
    M.AutoInit();
    Toast.fire({
      icon: 'success',
      title: 'Your message is sent'
    })
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
