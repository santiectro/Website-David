import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "./Contact.css"
import { Context } from "../Context"

export default  function Contact() {

    library.add(fab)

    const {Lightmode} = React.useContext(Context)


    return (
        <>
            <div className={`contact  ${ Lightmode ? "light" : "dark"  }`} id="contact-me" >
                <h3>Contact</h3>
                <p>
                    If you have any inquiries or would like to contact me please send me and email to 
                    santiago.barahona67@gmail.com or call me at +1-819-328-1724, you can also reach me 
                    trough any of my social media platforms down below
                </p>
                <ul>
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