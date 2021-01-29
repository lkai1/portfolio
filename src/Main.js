import React from 'react'
import saakuva from './saakuva.jpg'
import bhgame from './bhgame.png'
import mApp1 from './meetingsappforport1.png'
import mApp2 from './meetingsappforport2.png'
import mApp3 from './meetingsappforport3.png'
import lca from './elamanhallinta-app.png'
import GitHub_logo from './GitHub_logo.png'
import linkedin_logo from './linkedin.png'
import './main.css'

const Main = () => {
    return (
        <div id="mainDiv">
            <div id="projectsDiv">
                <div className="projectDiv">
                    <p>Life Control app</p>
                    <img src={lca} style={{ width: 220, height: 400 }} />
                </div>
            </div>
        </div>
    )
}
export default Main