import React from "react";
import "./Resume.css"
import ResumeImg from "./ResumeDownload.png"


function Resume(){
    const downloadFile = (url) => {
        const fileName = "AlecOdellResume.pdf"
        const aTag = document.createElement("a")
        aTag.href = url
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }


    return(
        <div className="Resume">
            <header className="Resume-header">
                My Resume
            </header>
            <hr className="Resume-hr"></hr>
            <button onClick={() => {
                downloadFile("http://alec-0dell.github.io/Portfolio-Website/AlecOdellResume2023.pdf")
            }} className="Resume-Button" href="React AlecOdellResume2023.pdf" download="AlecOdellResume2023.pdf">Download Resume</button>
            <hr className="Resume-hr"></hr>
            <img className="Resume-IMG" src={ResumeImg} alt="Alec Odell's Resume"></img>
        </div>

    );
}

export default Resume;