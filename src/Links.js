import React from 'react'
import './Links.css'
import GitHub_logo from './GitHub_logo.png'
import linkedin_logo from './linkedin.png'
import { Link } from 'react-router-dom'
const Links = () => {
    return (
        <div id="linksPage">
            <div className="navBar">
                <div className="navGrid">
                    <Link to='/links' className="link">Links</Link>
                    <Link to='/' id="portfolio" className="link">PORTFOLIO</Link>
                    <Link to='/contact' id="contanctBtn" className="link">Contact</Link>
                </div>
            </div>
            <div id="linksDiv">
                <p id="linksText">Checkout my GitHub and LinkedIn</p>
                <a href="https://github.com/lkai1"><img src={GitHub_logo}></img></a>
                <a href="https://www.linkedin.com/in/kai-lehtinen/"><img src={linkedin_logo} id="linkedinlogo"></img></a>
            </div>
        </div>
    )
}
export default Links