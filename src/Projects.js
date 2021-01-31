import React, { useState } from 'react'
import bhgame from './images/bhgame.png'
import bhmenu from './images/bhmenu.png'
import mApp from './images/meetingsapp.png'
import mApp1 from './images/meetingsapp1.png'
import mApp2 from './images/meetingsapp2.png'
import mApp3 from './images/meetingsapp3.png'
import lca from './images/lifecontrolapp.png'
import lca1 from './images/lifecontrolapp1.png'
import lca2 from './images/lifecontrolapp2.png'
import GitHub_logo from './images/GitHub_logo.png'
import './projects.css'

const boldText = (text) => {
    return <span style={{ fontWeight: "bolder" }}>{text}</span>
}
const FirstProject = ({ onProjectInfoClick }) => {
    const images = [lca, lca1, lca2]
    const [imagePos, setImagePos] = useState(0)
    const onImageClick = () => {
        if (imagePos === images.length - 1) {
            setImagePos(0)
        } else {
            setImagePos(imagePos + 1)
        }
    }
    const imageSelectedColor = (imgPos) => {
        if (imgPos === imagePos) {
            return "rgb(44, 173, 248)"
        } else {
            return "rgb(44, 173, 248, 0.4)"
        }
    }
    return (
        <div className="projectDiv">
            <div onClick={() => onProjectInfoClick()} className="projectInfo">
                <p className="projectTitle">Life Control App</p>
                <p className="subTitle">Tech Stack</p>
                <p className="aboutText">Expo</p>
                <p className="aboutText">expo-sqlite</p>
                <p className="aboutText">React Native</p>
                <p className="aboutText">JavaScript</p>
                <p className="subTitle">About</p>
                <p className="aboutText">
                    App to track exercises, eating,
                    and spending.
                    I created a {boldText("carousel")} with flatlist for the pages.
                    I used SQLite to create a {boldText("local offline database")}.
                    I created a {boldText("dropdown menu")} to select exercise type and duration
                    and also a spending type.
                    For calculating weekly averages I created a {boldText("calendar")} type of system.
                    </p>
                <div style={{ marginLeft: 20, borderRadius: 50, height: 25, width: 25, backgroundColor: 'ghostwhite' }}>
                    <a href="https://github.com/lkai1/elamanhallinta-app" target="_blank" rel="noopener noreferrer"><img style={{ marginTop: 2.5, marginLeft: 0.75, width: 20, height: 20 }} src={GitHub_logo} /></a>
                </div>
            </div>
            <div>
                <img onClick={() => onImageClick()} src={images[imagePos]} style={{ borderTopRightRadius: 15, width: 165, height: 300 }} />
                <div style={{ marginLeft: 10, display: "flex", position: "absolute", height: 0, bottom: 15 }}>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(0) }}></div>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(1) }}></div>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(2) }}></div>
                </div>
            </div>
        </div>
    )
}
const SecondProject = ({ onProjectInfoClick }) => {
    const images = [mApp, mApp1, mApp2, mApp3]
    const [imagePos, setImagePos] = useState(0)
    const onImageClick = () => {
        if (imagePos === images.length - 1) {
            setImagePos(0)
        } else {
            setImagePos(imagePos + 1)
        }
    }
    const imageSelectedColor = (imgPos) => {
        if (imgPos === imagePos) {
            return "rgb(44, 173, 248)"
        } else {
            return "rgb(44, 173, 248, 0.4)"
        }
    }
    return (
        <div className="projectDiv">
            <div onClick={() => onProjectInfoClick()} className="projectInfo">
                <p className="projectTitle">Meetings App</p>
                <p className="subTitle">Tech Stack</p>
                <p className="aboutText">Expo</p>
                <p className="aboutText">Apollo GraphQL</p>
                <p className="aboutText">MongoDB</p>
                <p className="aboutText">React Native</p>
                <p className="aboutText">JavaScript</p>
                <p className="subTitle">About</p>
                <p className="aboutText">
                    {boldText("This project is unfinished. ")}
                    I created {boldText("login/register")} for this project, password is hashed using {boldText("bcrypt")} and saltrounds.
                    All data is stored into {boldText("MongoDB")} including user accounts. I created
                    a small {boldText("chat")} box for discussion about meeting's details and i used {boldText("GrapghQL subscriptions ")}
                    to make it realtime. There is also a list of participants, only the scheduler has a link for
                    {boldText(" adding/removing")} participants.
                    </p>
            </div>
            <div>
                <img onClick={() => onImageClick()} src={images[imagePos]} style={{ borderTopRightRadius: 15, width: 165, height: 300 }} />
                <div style={{ marginLeft: 10, display: "flex", position: "absolute", height: 0, bottom: 15 }}>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(0) }}></div>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(1) }}></div>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(2) }}></div>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(3) }}></div>
                </div>
            </div>
        </div>
    )
}
const ThirdProject = ({ onProjectInfoClick }) => {
    const images = [bhmenu, bhgame]
    const [imagePos, setImagePos] = useState(0)
    const onImageClick = () => {
        if (imagePos === images.length - 1) {
            setImagePos(0)
        } else {
            setImagePos(imagePos + 1)
        }
    }
    const imageSelectedColor = (imgPos) => {
        if (imgPos === imagePos) {
            return "rgb(44, 173, 248)"
        } else {
            return "rgb(44, 173, 248, 0.4)"
        }
    }
    return (
        <div className="projectDiv">
            <div onClick={() => onProjectInfoClick()} className="projectInfo">
                <p className="projectTitle">BUNNY_HOP</p>
                <p className="subTitle">Tech Stack</p>
                <p className="aboutText">Expo</p>
                <p className="aboutText">Redux</p>
                <p className="aboutText">React Native</p>
                <p className="aboutText">JavaScript</p>
                <p className="subTitle">About</p>
                <p className="aboutText">
                    I used rotated Flatlist as the platform.
                    Traps are created randomly every 3 seconds.
                    Bunny moves every 0.85 seconds by going certain amount of pixels to chosen direction. Every tile is numbered,
                    when the bunny moves it changes its position number to the tile's number it is on top of, if tile is red the game will end.
                    The Coin is randomly put on a tile that is not in front of the bunny and is not a trap.
                    Every state is handled by {boldText("Redux")}.
                </p>
                <div style={{ marginLeft: 20, borderRadius: 50, height: 25, width: 25, backgroundColor: 'ghostwhite' }}>
                    <a href="https://github.com/lkai1/bunny-hop" target="_blank" rel="noopener noreferrer"><img style={{ marginTop: 2.5, marginLeft: 0.75, width: 20, height: 20 }} src={GitHub_logo} /></a>
                </div>
            </div>
            <div>
                <img onClick={() => onImageClick()} src={images[imagePos]} style={{ borderTopRightRadius: 15, height: 300 }} />
                <div style={{ marginLeft: 10, display: "flex", position: "absolute", height: 0, bottom: 15 }}>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(0) }}></div>
                    <div style={{ margin: 3, width: 20, height: 5, borderRadius: 50, backgroundColor: imageSelectedColor(1) }}></div>
                </div>
            </div>
        </div>
    )
}
const NavBlocks = ({ projectsView, setProjectsView }) => {
    if (projectsView === 0) {
        return (
            <div id="navblocks">
                <div onClick={() => setProjectsView(0)} id="navblock1"></div>
                <div onClick={() => setProjectsView(1)} id="navblock2"></div>
                <div onClick={() => setProjectsView(2)} id="navblock2"></div>
            </div>
        )
    } else if (projectsView === 1) {
        return (
            <div id="navblocks">
                <div onClick={() => setProjectsView(0)} id="navblock2"></div>
                <div onClick={() => setProjectsView(1)} id="navblock1"></div>
                <div onClick={() => setProjectsView(2)} id="navblock2"></div>
            </div>
        )
    } else if (projectsView === 2) {
        return (
            <div id="navblocks">
                <div onClick={() => setProjectsView(0)} id="navblock2"></div>
                <div onClick={() => setProjectsView(1)} id="navblock2"></div>
                <div onClick={() => setProjectsView(2)} id="navblock1"></div>
            </div>
        )
    }
}
const Projects = () => {
    const [projectsView, setProjectsView] = useState(0)
    const onProjectInfoClick = () => {
        if (projectsView === 2) {
            setProjectsView(0)
        } else {
            setProjectsView(projectsView + 1)
        }
    }
    const projects = [
        <FirstProject onProjectInfoClick={onProjectInfoClick} />,
        <SecondProject onProjectInfoClick={onProjectInfoClick} />,
        <ThirdProject onProjectInfoClick={onProjectInfoClick} />
    ]
    return (
        <div>
            <div id="projectsDiv">
                {projects[projectsView]}
            </div>
            <NavBlocks projectsView={projectsView} setProjectsView={setProjectsView} />
        </div>
    )
}
export default Projects