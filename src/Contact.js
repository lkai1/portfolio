import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
            <div className="navBar">
                <div className="navGrid">
                    <Link to='/links'className="link">Links</Link>
                    <Link to='/' id="portfolio" className="link">PORTFOLIO</Link>
                    <Link to='/contact' id="contanctBtn" className="link">Contact</Link>
                </div>
            </div>
        </div>
    )
}
export default Contact