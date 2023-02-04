import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./Contact.css"

export default  function Contact() {

    library.add(fab, faCheckSquare, faCoffee)

    return (
        <>
            <div className="contact">
                <h3>Contact</h3>
                <p>
                    Deserunt excepteur eu sit voluptate cillum proident culpa dolore excepteur labore minim ea minim. 
                    In enim elit magna elit eu ad amet ea irure duis esse ea id reprehenderit. Mollit officia fugiat 
                    aliquip sit aute consectetur cillum est consequat ullamco minim aute. Quis aliquip est aliquip 
                    reprehenderit officia nisi nisi anim ipsum.
                </p>
                <ul>
                    <li><FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-github"  size="2x"/></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" /></li>
                </ul>
            </div>
        </>
    )
}