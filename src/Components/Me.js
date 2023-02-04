import React from "react"
import "./Me.css"
import Jane from "../Images/jane.jpg"

export default function Me () {
    return (
        <>
            <h4 className="left">Too much code, who am I?</h4>
            <div className="me-section" >
                <img src={Jane} alt="Jane smiling" />
                <div>
                    <p>
                        Est cupidatat consequat ea ea eiusmod Lorem esse irure et ullamco est laborum reprehenderit. 
                        Ea consequat nisi irure nisi officia quis laboris consequat proident. Excepteur irure cillum 
                        sit eiusmod velit labore et. Deserunt laboris ipsum aliqua cupidatat ex mollit veniam aliqua 
                        enim cupidatat nostrud dolor tempor. Fugiat dolor non dolore sint. Anim fugiat dolore sit et 
                        ex incididunt anim qui culpa sint velit.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        Voluptate ut occaecat excepteur reprehenderit fugiat aliqua amet duis cillum non aliquip non nulla aute. 
                        Proident officia esse voluptate magna pariatur irure do qui laborum exercitation deserunt pariatur minim. 
                        Laborum adipisicing et ad incididunt. Sint esse nulla consequat irure irure aute pariatur exercitation 
                        mollit proident. Aliquip aliquip voluptate aute minim esse deserunt tempor consectetur. Officia ea amet 
                        fugiat elit.
                    </p>    
                    <button> Check my resume </button>
                </div>
            </div>
        </>
    )
}