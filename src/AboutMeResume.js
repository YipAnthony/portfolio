import React from 'react'
import './AboutMeResume.css'

export default function AboutMeResume() {

    let isMobile = window.innerWidth < 1000;

    return (
        <> 
        <div className="resumeContainer">
            {isMobile ? 
                <div className="resumeButtonContainer">
                    <a className="resumeDownload"  href={process.env.PUBLIC_URL + "/images/AnthonyYipResume.pdf"} download>
                        <button className="btn btn-secondary">Resume</button>
                    </a>

                </div>
            :

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Resume
                        </button>
                        </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="embed-responsive embed-responsive-4by3 resumePDFFormat">
                                            <iframe width="100%" height="auto" className="embed-responsive-item resumePDFFormat" title="MedicalResume" src={process.env.PUBLIC_URL + "/images/AnthonyYipResume.pdf"}></iframe>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            }
        </div>
        
        </>
    )
}
