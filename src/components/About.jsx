import React, { useEffect, useRef } from "react";
import "../styles/About.css"; 

function About() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 380; 
    const scrollInterval = 5000; 

    const intervalId = setInterval(() => {
      if (scrollAmount + container.clientWidth >= container.scrollWidth) {
        scrollAmount = 0; 
      } else {
        scrollAmount += scrollStep;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

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

     <div className="about-fourth-section">
       <div className="about-fourth-left">
         <p className="small-heading">Why Farm</p>
         <h1 className="large-title">Build A farm</h1>
         <p className="fourth-paragraph">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
         </p>
         <button className="contact-button">Contact Us</button>
       </div>
       <div className="about-fourth-right">
         <div className="stats-grid">
           <div className="stat-item">
             <div className="stat-icon">📦</div>
             <div className="stat-number">36+</div>
             <div className="stat-label">Products</div>
           </div>
           <div className="stat-item">
             <div className="stat-icon">⚙️</div>
             <div className="stat-number">20+</div>
             <div className="stat-label">Satisfied Clients</div>
           </div>
           <div className="stat-item">
             <div className="stat-icon">⚙️</div>
             <div className="stat-number">2300+</div>
             <div className="stat-label">Year of Experience</div>
           </div>
           <div className="stat-item">
             <div className="stat-icon">📦</div>
             <div className="stat-number">60+</div>
             <div className="stat-label">Local Team Members</div>
           </div>
         </div>
       </div>
     </div>

     <div className="about-fifth-section">
       <h2 className="fifth-heading"><p>The</p> Openfield Timeline</h2>
       <div className="timeline-container" ref={timelineRef}>
         <div className="timeline-item">
           <h3 className="timeline-year">2019</h3>
           <h4 className="timeline-title">Facilis eius consequuntur dolor</h4>
           <p className="timeline-description">
             Cupiditate aut beatae rerum sint molestiae. aliquam et ea. Exercitationem aut eveniet
           </p>
         </div>
         <div className="timeline-item">
           <h3 className="timeline-year">1999</h3>
           <h4 className="timeline-title">Started the Company</h4>
           <p className="timeline-description">
             placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
           </p>
         </div>
         <div className="timeline-item">
           <h3 className="timeline-year">2000</h3>
           <h4 className="timeline-title">Started the Company</h4>
           <p className="timeline-description">
             placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
           </p>
         </div>
          <div className="timeline-item">
           <h3 className="timeline-year">2001</h3>
           <h4 className="timeline-title">Started the Company</h4>
           <p className="timeline-description">
             placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
           </p>
         </div>
          <div className="timeline-item">
           <h3 className="timeline-year">2002</h3>
           <h4 className="timeline-title">Started the Company</h4>
           <p className="timeline-description">
             placerat suscipit. Vestibulum vitae nunc vitae nisi rutrum dolor sit amet, consectetur adipiscing elit. Cras
           </p>
         </div>
       </div>
     </div>
   </div>

     <div className="about-sixth-section">
       <h2 className="sixth-heading">Meet Our Team</h2>
       <div className="team-container">
         <div className="team-card">
           <img className="team-photo" src="/src/assets/person avatar.jpg" alt="Team Member 1" />
           <p className="team-role">Marketing manager</p>
           <p className="team-name">Swasme swagger</p>
           <div className="social-icons">
             <a href="#" aria-label="Facebook">F</a>
             <a href="#" aria-label="Twitter">T</a>
           </div>
         </div>
         <div className="team-card highlight-card">
           <img className="team-photo" src="/src/assets/person avatar.jpg" alt="Team Member 2" />
           <p className="team-role">Marketing manager</p>
           <p className="team-name">Swasme swagger</p>
           <div className="social-icons">
             <a href="#" aria-label="Facebook">F</a>
             <a href="#" aria-label="Twitter">T</a>
           </div>
         </div>
         <div className="team-card">
           <img className="team-photo" src="/src/assets/person avatar.jpg" alt="Team Member 3" />
           <p className="team-role">Marketing manager</p>
           <p className="team-name">Swasme swagger</p>
           <div className="social-icons">
             <a href="#" aria-label="Facebook">F</a>
             <a href="#" aria-label="Twitter">T</a>
           </div>
         </div>
       </div>
     </div>
   </>
  );
}
export default About

