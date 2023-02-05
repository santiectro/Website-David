import React from "react"
import './Header.css';
import { Context } from "../Context";


export default function Header () {

    const { Lightmode, toggleMode} = React.useContext(Context)

    return (

        <nav className={ Lightmode ? "light" : "dark" }>

            <div id="header" >
                
                <p>&lt;david-barahona&gt;</p>
                <p>{Lightmode ? "Dark" : "Light"} Mode </p>
                <input type="checkbox" onClick={toggleMode} />  

            </div>
            <ul >
                <a href="#home" className={ Lightmode ? "light" : "dark"} > <li> Home </li> </a> 
                <a href="#all-projects" className={ Lightmode ? "light" : "dark"} > <li>Projects</li> </a> 
                <a href="#about-me" className={ Lightmode ? "light" : "dark"} > <li>About</li> </a> 
                <a href="#contact-me" className={ Lightmode ? "light" : "dark"} > <li>Contact</li> </a> 
            </ul>
        </nav>
    )
}