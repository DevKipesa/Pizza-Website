import React from 'react';
//import{Link} from 'react-router-dom';
import BannerImage from '../assets/img-home.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div  className='headerContainer'
      style={{backgroundImage: `url (${BannerImage})`}} />

        <h1>THE BEST</h1>
        <h1>TRY IT, LOVE IT</h1>

       
      
        
        
        
        
        
      </div>
  )
}

export default Home