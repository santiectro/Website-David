import React from "react";
import { Context } from "../Context";
import quiz from "../Images/quiz.jpg"
import "./WebsiteInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export default function WebsiteInfo () {

    library.add(fab)

    const { Lightmode, toggleMode} = React.useContext(Context)

    return (
        <>
            <nav className="web-nav">
                <div>
                    <p>&lt;david-barahona&gt;</p>
                    <p>{Lightmode ? "Dark" : "Light"} Mode </p>
                    <input type="checkbox" onClick={toggleMode} checked={Lightmode ? false : true}/>  
                </div>
                {/* <Link className={ Lightmode ? "light" : "dark"} to="/">
                        Main Page
                </Link> */}
                <ul >
                    <Link className={ Lightmode ? "light" : "dark"} to="/">
                            Main Page
                    </Link>
                </ul>

            </nav>
            <img src={quiz} alt="quiz-project" id="web-img" />
            <div className="explanation">
                <h3>
                    What tools did we use?
                </h3>
                <p>
                    In this project the tools that were used are:
                </p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <h3>
                    What are we expecting from the project?  
                </h3>
                <p>
                    This result from this project is to get a working app that interacts with an
                    user trough a couple of questions, the user can select the difficulty and the amount of 
                    questions they would like to answer, the user cannot submit the answers if he hasn't
                    selected an answer for all of the questions. After the user has submitted the answers it
                    would display the correct answer in green and if the user selected the wrong answer it would
                    highlight it in red, at the end it would show the results
                </p>
                <h3>
                    How did we accomplished it?
                </h3>
                <p>
                    Magna laborum officia ullamco labore esse aute ut. Ullamco veniam nostrud laborum 
                    ut occaecat est. Eiusmod et dolor commodo proident nostrud aute mollit non et 
                    incididunt dolore labore sint. Magna sint exercitation elit deserunt aliqua minim 
                    adipisicing. Incididunt reprehenderit pariatur veniam ullamco labore eu in pariatur 
                    ad aliquip nulla laborum ullamco fugiat. Ea non deserunt excepteur incididunt veniam 
                    adipisicing consectetur reprehenderit qui.
                </p>
                <ul className="logos">
                    <a href="https://twitter.com/santi632">
                        <li><FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" /></li>
                    </a>
                    <a href="https://www.instagram.com/santi_barahona347/">
                        <li><FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" /></li>
                    </a>
                    <a href="https://github.com/santiectro">
                        <li><FontAwesomeIcon icon="fa-brands fa-github"  size="2x"/></li>
                    </a>
                    <a href="https://www.linkedin.com/in/david-barahona-a298a81a0/">
                        <li><FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" /></li>
                    </a>
                    
                </ul>
            </div>
            
            
        </>
    )
}