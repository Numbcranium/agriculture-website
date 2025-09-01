import React from "react";
import "../styles/About.css"; 

function About() {
  return (
   <>
   <div className="AboutUs-container">
     <div className="about-top-section">
      <p className="top-text-about">About us</p>
      <p className="lower-text-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, adipisci quas dignissimos voluptatib</p>
     </div>
     <div className="about-second-section">
       <div className="about-second-text">
         <p className="welcome-text">Welcome</p>
         <h1 className="agrobi-title">Agrobi</h1>
         <h3 className="subtitle-text">Rtaque magnam illo inventore ut Ut itaque magnam</h3>
         <p className="paragraph-text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus ut arcu pretium ornare. Quisque porttitor placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
         </p>
         <p className="paragraph-text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus ut arcu pretium ornare. Quisque porttitor placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
         </p>
       </div>
       <div className="about-second-image">
         <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Greenhouse" />
       </div>
     </div>
     <div className="about-third-section">
       <div className="about-third-column">
         <div className="icon">🧠</div>
         <h2 className="third-heading">Mission</h2>
         <h4 className="third-subheading">itaque magnam dolor</h4>
         <p className="third-paragraph">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus ut arcu pretium ornare. Quisque porttitor placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
         </p>
       </div>
       <div className="about-third-column">
         <div className="icon">⛰️</div>
         <h2 className="third-heading">Mission</h2>
         <h4 className="third-subheading">Ipsum dolor sit amet, consectetur</h4>
         <p className="third-paragraph">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus ut arcu pretium ornare. Quisque porttitor placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
         </p>
       </div>
     </div>
   </div>
   </>
  );
}

export default About;
