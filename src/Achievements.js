import React from 'react';
import './Achievements.css';
import nptel from './nptel.png';
import udemy from './udemy.png';
import iit from './iitm.png';
import wehub from './wehub.jpg';
function Achievements() {
  return (
    <div style={{ backgroundColor: '#F2E9E4', fontFamily: 'emoji' ,color: '#22223B',overflow:'hidden'}}>
    <h1 style={{margin:'20px'}}>Achievements</h1>
    <div className="Achievements" >
        <div class="Achievement" >
          <img src={iit} alt="IIT Madras" />
          <br></br>
          Foundation Level in Programming and Data Science – IIT Madras B.S. Degree
        </div>  
        <div class="Achievement">
          <img src={nptel} alt="NPTEL" /> 
          <br></br>
          The Joy of Computing Using Python – NPTEL
        </div>  
        <div class="Achievement">
          <img src={udemy} alt="Udemy" />
          <br></br>
          DBMS – Udemy         
          </div>  
        <div class="Achievement">
          <br></br>
          <img src={nptel} alt="NPTEL"></img>
          <br></br>
          Programming in Java – NPTEL
        </div>  
        <div class="Achievement">
          <img src={wehub} alt="WE Hub" />
          <br></br>
          Graduated from WE Hub’s We-Enable Programme. 
        </div>
      </div>
      </div>
  );
}

export default Achievements;