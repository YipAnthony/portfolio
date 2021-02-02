import React, { useRef, useEffect } from 'react'
import "./Skills.css"
import "./particle/particle.css"
import particleAnimation from './particle/particle'
// import { useResizeDetector } from 'react-resize-detector';
import AboutMeResume from './AboutMeResume'

export default function Skills() {

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>
    // const { width, height } = useResizeDetector();

    const canvasRef = useRef()
    const canvasTitleRef = useRef()

    useEffect(() => {
        particleAnimation(canvasTitleRef.current, "title");        
        particleAnimation(canvasRef.current);        
    })



    return (
        <>
            <div id="skillsContainer" className="skillsContainer display-3 font-weight-normal">

                <div id="canvasContainer" className="canvasContainer" >
                    <canvas id="canvasTitle" ref={canvasTitleRef}></canvas>
                </div>
                
                <div className="interactableText">
                    <div className="arrow1">
                        <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="arrow"></img>
                    </div>
                    <h5 className="skillsText">(Interactable!)</h5>
                    <div className="arrow2">
                        <img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="arrow"></img>
                    </div>
                
                </div> 

                <div className="canvasContainer" >
                    <canvas id="canvas1" ref={canvasRef}></canvas>
                </div>

                <AboutMeResume/>
            </div>
        </>
    )
}
