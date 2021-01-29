import React, {useState} from 'react'
import ResumeCurrentTab from './ResumeCurrentTab'

export default function AboutMeResume() {
    let [programmingTab, setProgrammingTab] = useState("nav-link active")
    let [medicalTab, setMedicalTab] = useState("nav-link")

    function handleClick(e){
        let target = e.target.innerHTML;
        if (target === "Programming"){
            setProgrammingTab(()=> "nav-link active")
            setMedicalTab(()=> "nav-link")
        }
        if (target === "Medical"){
            setProgrammingTab(()=> "nav-link")
            setMedicalTab(()=> "nav-link active")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="card text-center">
                    {/* <div className="card-header">
                        <ul className="nav nav-pills card-header-pills mb-1">
                        <li className="nav-item">
                            <div className={programmingTab} aria-current="true" onClick={handleClick}>Programming</div>
                        </li>
                        <li className="nav-item">
                            <div className={medicalTab}  aria-current="true"  onClick={handleClick}>Medical</div>
                        </li>
                        </ul>
                    </div> */}
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">Programming Resume</h5>
                            <div className="embed-responsive embed-responsive-4by3">
                                    <iframe className="embed-responsive-item" title="MedicalResume" src={process.env.PUBLIC_URL + "/images/AnthonyYipResume.pdf"}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
