import React from 'react';
import './AboutMe.css';
import profileImage from './profile.jpg';
function AboutMe() {
  return (
    <div className="AboutMe" style={{ backgroundColor: '#F2E9E4', fontFamily: 'Arial, sans-serif',overflow: 'hidden'  }}>
      <h1 style={{ textAlign:'center',fontFamily: 'Lato, sans-serif', color:'#22223B'}}>About Me</h1>
      <div class="About-Me-content">
        <div class="About-Me-image" >
          <img src={profileImage} alt="Profile" style={{ width: '300px', borderRadius: '50%', height: 'auto', align :'left' }} />
        </div>
        <div class="About-Me-text">
          <p style={{ textAlign: 'justify', fontFamily: 'Lato, sans-serif', color: '#22223B', fontSize: '25px' }}>
            Computer Science Engineering student with a strong foundation in programming, data structures, and database management. Passionate about software development, problem-solving, and building innovative technology solutions. Adept at designing efficient algorithms, writing clean code, and collaborating on full-stack development projects. Experienced in agile methodologies and eager to apply theoretical knowledge to real-world engineering challenges. Dedicated to continuous learning, exploring emerging technologies, and optimizing system performance under pressure. Seeking opportunities to contribute to impactful software initiatives while growing as a technical professional.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
export default AboutMe;