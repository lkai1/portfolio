import React from 'react'
import './Links.css'
import GitHub_logo from './GitHub_logo.png'
import linkedin_logo from './linkedin.png'
const Links = () => {
    return (
        <div id="linksPage">
            <div id="linksDiv">
                <p id="linksText">Checkout my GitHub and LinkedIn</p>
                <a href="https://github.com/lkai1"><img src={GitHub_logo}></img></a>
                <a href="https://www.linkedin.com/in/kai-lehtinen/"><img src={linkedin_logo} id="linkedinlogo"></img></a>
            </div>
        </div>
    )
}
export default Links