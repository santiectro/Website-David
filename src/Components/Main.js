import React from "react"
import photo from "../Images/me-profile.jpeg"
import "./Main.css"
import { Context } from "../Context"


export default function Main () {

    //In p tag if hover or something say that in path to become a full stack developer
    const {Lightmode} = React.useContext(Context)

    return (
        <>
            <div className={`main-section ${Lightmode? "light" : "dark"} `} id="home">
                <img src={photo} alt="serious david"/>
                <h2>Bonjour, je m'appelle David</h2>
                <p>Front-End Developer</p> 
            </div>
            <div className={`hero-component ${Lightmode? "light" : "dark"}`}>
                <h3>Attributes</h3>
                <div className="container">
                    <div>
                        <h4>Something</h4>
                        <p>
                            Nisi exercitation consequat aute nisi cillum nostrud quis cillum non commodo 
                            reprehenderit. Ex eu commodo laborum dolor reprehenderit. Est laboris voluptate 
                            eu ullamco ullamco fugiat.
                        </p>
                    </div>
                    <div>
                        <h4>Development</h4>
                        <p>
                            Nulla id magna fugiat irure in velit esse ut. Quis aliqua ex incididunt do 
                            velit sunt occaecat nostrud adipisicing irure. Id occaecat ipsum ullamco tempor 
                            proident aute in occaecat quis laborum. Dolore adipisicing duis labore aliquip quis dolore elit.
                        </p>
                    </div>
                </div>
            </div>
        </>
        
    )
}