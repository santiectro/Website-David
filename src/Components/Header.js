import React from "react"
import photo from "../Images/me-profile.jpeg"
import './Header.css';

export default function Header () {
    return (
        <nav>
            <div id="header">
                
                <p>&lt;david-barahona&gt;</p>
                
            </div>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}