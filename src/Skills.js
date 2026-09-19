import React from 'react';
import './Skills.css';
function Skills() {
  return (
    <div className="Skills" style={{backgroundColor: '#F2E9E4', color: '#22223B', fontFamily: 'emoji',overflow:'hidden'}}>
      <h1 style={{marginLeft: '20px'}}><ul>Skills</ul></h1>
      <p>
        <div class="skills-container">
            <div class = "skill">
              <h2>Python</h2>
              <p>Proficient in Python programming, including data structures, algorithms, and object-oriented programming. 
              Experienced in using Python for web development, data analysis, and automation tasks.</p>
            </div>
            <div class = "skill">
              <h2>Java</h2>
              <p>Strong knowledge of Java programming, including core concepts, multithreading, and design patterns. Experienced in building Java applications and working with frameworks like Spring and Hibernate.</p> 
            </div>
            <div class = "skill">
              <h2>JavaScript</h2>
              <p>Skilled in JavaScript for front-end development, including DOM manipulation, event handling, and asynchronous programming. Familiar with popular libraries and frameworks like React and Node.js.</p>
            </div>
            <div class = "skill">
              <h2>SQL</h2>
              <p>Proficient in SQL for database management, including writing complex queries, optimizing performance, and working with relational databases like MySQL and PostgreSQL.</p>
            </div>
            <div class = "skill">
              <h2>HTML & CSS</h2>
              <p>Experienced in HTML and CSS for building responsive and visually appealing web pages. Knowledge of modern web design principles, including Flexbox and Grid layout techniques.</p>
            </div>
            <div class = "skill">
              <h2>React</h2>
              <p>Skilled in React for building dynamic and interactive user interfaces. Familiar with React hooks, state management, and component-based architecture.</p>
            </div>  
            
        </div>
      </p>
    </div>
  );
}
export default Skills;
