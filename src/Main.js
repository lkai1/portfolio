import React from 'react'
import GitHub_logo from './images/GitHub_logo.png'
import Projects from './Projects'
import './main.css'

const Main = () => {
    return (
        <div id="mainDiv">
            <div id="titleDiv">
                <p id="titleText">Kai Lehtinen</p>
                <p id="whiteTitleText">|</p>
                <p id="titleText">Web/Mobile Developer</p>
            </div>
            <Projects />
            <div id="contactInfo">
                <p id="contactText">City: Nokia, Finland</p>
                <p id="contactText">Email: kai-le@outlook.com</p>
                <div style={{ marginLeft: 20, borderRadius: 50, height: 40, width: 40, backgroundColor: 'ghostwhite' }}>
                    <a href="https://github.com/lkai1" target="_blank" rel="noopener noreferrer"><img style={{ marginTop: 2.5, marginLeft: 2.5, width: 35, height: 35 }} src={GitHub_logo} /></a>
                </div>
            </div>
        </div>
    )
}
export default Main