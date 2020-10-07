import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navBar">
        <span className="navGrid">
          <p>empty</p>
          <p>PORTFOLIO</p>
          <p id="contanctBtn">Contact</p>
        </span>
      </div>
      <div className="wrapper">
        <div id="leftFront">
          <span id="nameText">
          <h2>KAI LEHTINEN</h2>
          <p>FrontEnd/FullStack Web developer</p>
          </span>
        </div>
        <div id="rightFront">
        </div>
      </div>
    </div>
  )
}

export default App;
