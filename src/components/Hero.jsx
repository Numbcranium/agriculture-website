import React from "react";
import '../styles/Hero.css';
import '../styles/heroResponsive.css';
//import bgGreen from '../assets/images/bg-green.png';
import farmingvideo from '../assets/farming-video.mp4';
import plantingIcon from '../assets/plantingIcon.jpg';
import farming from '../assets/farming.jpg';
//import mowingIcon from '../assets/images/mowingIcon.png';
import gardeningIcon from '../assets/gardeningIcon.jpg';

function Hero() {
  return (
    <section id="home">
      <div className="hero">
        
         <video id="f6841cd7-bc01-e16a-959d-e6c1dc1b47c8-video" autoPlay loop style={{backgroundImage:"url('../assets/farming-video')"}} className="video"><source src="https://cdn.prod.website-files.com/6317f8c46ec157a19839cf33/6317f8c46ec157369839cfcf_bg%20video-transcode.mp4" data-wf-ignore="true"/>
          <source src="https://cdn.prod.website-files.com/6317f8c46ec157a19839cf33/6317f8c46ec157369839cfcf_bg%20video-transcode.webm" data-wf-ignore="true"/></video>
         
        <div className="intro">
          <div className="heading">                           
            <h1>Grow Fresh, 
              Organic Vegetables</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus ut arcu pretium ornare. Quisque porttitor placerat</p>
          </div>
          <a href="" className="discover">Discover More</a>
        </div>
        
      </div>
      <div className="welcome">
        <div className="write-up">
          <h1>Welcome to Agrobi</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus ut arcu pretium ornare. Quisque porttitor placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras</p>
          <a href="" className="discover more">Discover More</a>
        </div>
        <div className="illustration">
          <img src={farming} alt="" />
          
        </div>
      </div>
      <div className="reasons">
        <div className="floatingSteps">
          <div className="steps">
            <div className="stage">
              <img src={plantingIcon} alt="" />
              <h2>Planting</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse var</p>
            </div>
            <div className="stage">
              {/* <img src={mowingIcon} alt="" /> */}
              <h2>Mowing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse var</p>
            </div>
            <div className="stage">
              <img src={gardeningIcon} alt="" />
              <h2>Gardening</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse var</p>
            </div>
          </div>
        </div>
        <div className='farm'>
          <div className='build'>
            <h2>Why Farm</h2>
            <h1>Build a farm</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <a href="" className="contact">Contact Us</a>
          </div>
          <div className='stats'>
            <div className='block first'>
              <img src='' alt="" />
              <h1>36+</h1>
              <h2>Products</h2>
            </div>
            <div className='block'>
              <img src='' alt="" />
              <h1>200+</h1>
              <h2>Satisfied Clients</h2>
            </div>
            <div className='block'>
              <img src='' alt="" />
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='block last'>
              <img src='' alt="" />
              <h1>60+</h1>
              <h2>Local Team Members</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;