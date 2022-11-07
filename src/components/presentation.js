import React from "react"
import ReactDom from "react-dom"

export default function Presentation(){
    return (
        <div className="info">
            <img src="../images/photo.png" />
            <h1 className="name">Sabrina Taramasco</h1>
            <p className="job">Frontend Developer</p>
            <p className="email">sabrinataramasco@hotmail.com</p>
            <div className="buttons">

                <span>

                    <button className="button button--email">
                        <img src="../images/mail.svg" width="16px" />
                        Email
                    </button>
                </span>
                <span>

                    <button className="button button--linkedin">
                        <img src="../images/linkedin.svg" width="16px" />
                        Linkedin
                    </button>
                </span>
            </div>
        </div>
    )
}