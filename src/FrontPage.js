import React from 'react';
import './FrontPage.css';
import { Link } from 'react-router-dom'
import saakuva from './saakuva.jpg'
import bhgame from './bhgame.png'
const App = () => {
  return (
    <div className="FrontPage">
      <div className="navBar">
        <div className="navGrid">
          <Link to='/links' className="link">Links</Link>
          <Link to='/portfolio' id="portfolio" className="link">PORTFOLIO</Link>
          <Link to='/contact' id="contanctBtn" className="link">Contact</Link>
        </div>
      </div>
      <div id="nameText">
        <h1 id="name">KAI LEHTINEN</h1>
        <p id="job-title">Full-Stack Web Developer</p>
      </div>
      <div id="projects">
        <p id="projectsText">PROJECTS</p>
        <div>
          <p className="projectHeader">BUNNY_HOP</p>
          <p className="projectInfo">https://play.google.com/store/apps/details?id=com.LKdev.bunny_hop</p>
          <img src={bhgame} width="200px" height="400px" />
        </div>
        <div>
          <p className="projectHeader">Weather App</p>
          <p className="projectInfo">https://salty-brook-58323.herokuapp.com/</p>
          <img src={saakuva} width="300px" height="200px" />
          <p className="projectInfo">Source code is in Links/github.</p>
        </div>
      </div>
      <div id="skillsText">
        <h2>SKILLS</h2>
      </div>
      <div className="skillsGrid">
        <div id="languagesText">
          <h3>LANGUAGES</h3>
          <p>- JavaScript</p>
          <p>- HTML</p>
          <p>- CSS</p>
          <p>- JSX</p>
          <p>- SQL</p>
          <p>- Java</p>
          <p>- TypeScript</p>
        </div>
        <div id="educationText">
          <h3>EDUCATION</h3>
          <h4>Helsinki University</h4>
          <p>- Basics of programming with Java</p>
          <p>- Advanced programming with Java</p>
          <p>- Basics of Databases with SQL</p>
          <p>- Basics of AI</p>
          <p>- FullStackOpen</p>
          <h4>Buutti Education</h4>
          <p>- BuutCamp: React</p>
        </div>
        <div id="otherText">
          <h3>OTHER</h3>
          <p>- React Native</p>
          <p>- GraphQL</p>
          <p>- MongoDB</p>
          <p>- Git</p>
          <p>- Redux</p>
          <p>- React</p>
          <p>- Scrum</p>
        </div>
      </div>
      {/* <span id="sertificates">
            <h2>SERTIFICATES</h2>
          </span> */}
    </div>
  )
}

export default App;
