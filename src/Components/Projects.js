import React from "react"
import photo from "../Images/password.jpg"
import "./Project.css"
import dashboard from "../Images/dashboard.png"
import quiz from "../Images/quiz.jpg"
import { Context } from "../Context"
import { Link } from "react-router-dom"


export default function Projects () {

    const {Lightmode} = React.useContext(Context) // use it somewhere

    return (
        <div id="all-projects"className={`${Lightmode ? "light" : "dark"}`}>
            


            <h4 className="center" >Less talk, more code</h4>
            <div className="project-holder" >
                <div className="project-attributes" >
                    <h5>Password Generator</h5>
                    <p>
                        Enim anim nostrud officia pariatur proident Lorem incididunt. Eiusmod proident 
                        enim qui aliqua tempor nulla do ut sunt aliqua amet. Nisi id ex ut laboris aliqua eu. 
                        Dolor qui deserunt pariatur aute deserunt est sit.
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <Link to="/fuck">
                        <button> Go behind the scenes </button>
                    </Link>
                </div>
                <img  src={photo} alt="password generator app" />
            </div>
            <div className="project-holder" >
                <div className="project-attributes" >
                    <h5>Custom Dashboard</h5>
                    <p>
                        Enim anim nostrud officia pariatur proident Lorem incididunt. Eiusmod proident 
                        enim qui aliqua tempor nulla do ut sunt aliqua amet. Nisi id ex ut laboris aliqua eu. 
                        Dolor qui deserunt pariatur aute deserunt est sit.
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <Link>
                        <button> Go behind the scenes </button>
                    </Link>
                    
                </div>
                <img  src={dashboard} alt="dashboard app" />
            </div>
            <div className="project-holder final" >
                <div className="project-attributes" >
                    <h5>Quizzical</h5>
                    <p>
                        Enim anim nostrud officia pariatur proident Lorem incididunt. Eiusmod proident 
                        enim qui aliqua tempor nulla do ut sunt aliqua amet. Nisi id ex ut laboris aliqua eu. 
                        Dolor qui deserunt pariatur aute deserunt est sit.
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <Link to="/fuck">
                        <button> Go behind the scenes </button>
                    </Link>
                </div>
                <a href="https://spiffy-sunflower-d5020e.netlify.app/"><img  src={quiz} alt="quiz app" /></a>
            </div>
        </div>
    )
}