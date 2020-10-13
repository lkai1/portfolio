import React from 'react';
import './FrontPage.css';
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div className="FrontPage">
      <div className="navBar">
        <div className="navGrid">
          <Link to='/links' className="link">Links</Link>
          <Link to='/' id="portfolio" className="link">PORTFOLIO</Link>
          <Link to='/contact' id="contanctBtn" className="link">Contact</Link>
        </div>
      </div>
      <div className="wrapper">
        <div id="leftFront">
          <div id="nameText">
            <h1>KAI LEHTINEN</h1>
            <p>FrontEnd/FullStack Web developer</p>
          </div>
          <div id="aboutMeDiv">
            <h2>About me</h2>
            <p>I started learning to code a little over one year ago now and every day I feel more passionate about it.</p>
            <p>I like solving problems and being creative.</p>
            <p>I am starting to feel confident enough about my skills in Front-End and React,</p>
            <p>so I started applying to jobs.</p>
            <p>I hope I will soon get my first job in the industry and a chance to improve my skills with real work assignments.</p>
          </div>
        </div>
        <div id="rightFront">
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
              <p>- MongoDB</p>
              <p>- GitHub</p>
              <p>- GitLab</p>
              <p>- Redux</p>
              <p>- React</p>
              <p>- Scrum</p>
            </div>
          </div>
          {/* <span id="sertificates">
            <h2>SERTIFICATES</h2>
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default App;
