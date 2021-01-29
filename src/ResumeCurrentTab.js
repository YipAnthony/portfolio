import React from 'react'

export default function ResumeCurrentTab(props) {
    if (props.tab === "nav-link active") {
        return(
        <div>
            <h5 className="card-title">Programming Resume</h5>
            <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" title="MedicalResume" src={process.env.PUBLIC_URL + "/images/AnthonyYipResume.pdf"}></iframe>
            </div>
        </div>
        )
    }
    else {
        return (
            <div>
                <h5 className="card-title">Medical Resume</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" title="MedicalResume" src={process.env.PUBLIC_URL + "/images/AnthonyYipMedicalResume.pdf"}></iframe>
                </div>
                
            </div>
        )
    }
}
