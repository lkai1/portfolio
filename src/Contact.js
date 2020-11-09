import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div id="contactPage">
            <div className="navBar">
                <div className="navGrid">
                    <Link to='/links' className="link">Links</Link>
                    <Link to='/portfolio' id="portfolio" className="link">PORTFOLIO</Link>
                    <Link to='/contact' id="contanctBtn" className="link">Contact</Link>
                </div>
            </div>
            <div id="contactDiv">
                <p id="contactText">Contact me for opportunities</p>
                <p>Email: kai-le@outlook.com</p>
                <p>Phone: 0403723822</p>
                <p>City: Nokia, Finland</p>
            </div>
        </div>
    )
}
export default Contact