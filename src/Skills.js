import React, { useRef, useEffect } from 'react'
import "./Skills.css"
import "./particle/particle.css"
import particleAnimation from './particle/particle'
// import { useResizeDetector } from 'react-resize-detector';
import AboutMeResume from './AboutMeResume'

export default function Skills() {

    
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
                <div className="canvasContainer" >
                    <canvas id="canvas1" ref={canvasRef}></canvas>
                </div>

                <AboutMeResume/>
            </div>
        </>
    )
}
