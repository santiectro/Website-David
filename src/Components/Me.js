import React from "react"
import "./Me.css"
import Jane from "../Images/jane.jpg"
import { Context } from "../Context"
import Pdf from "../david-resume.pdf"

export default function Me () {

    const {Lightmode} = React.useContext(Context) // use it somewhere

    return (
        <div id="about-me" > 
            <div className="whole">
                <h4 className="left">Too much code, who am I?</h4>
                <div className="me-section" >
                    <img src={Jane} alt="Jane smiling" />
                <div className="text-me">
                    <p>
                        My name is David Barahona, I'm from Colombia currently living in Canada 
                        I have various hobbies, like playing soccer, stocks, videogames and coding.
                        As we speak I'm 22 years old I started coding in 2021 after watching a video
                        about a guy coding some challenges in Ruby, never stopped since, I also consider
                        myself a music lover and as a porpuse of 2023 I decided to learn the piano
                    </p>
                    <button type="submit" onClick={() => window.open(Pdf)}>Check my resume</button>
                </div>
                </div>
            </div>
        </div>
    )
}