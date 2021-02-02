import React, { useRef, useEffect } from 'react'
import "./Header.css"
import parallaxExec from "./parallax.js"

export default function Header(props) {

    const skyRef = useRef();
    const titleRef = useRef();
    const mountainLeftRef = useRef();
    const mountainRightRef = useRef();
    const hillRightRef = useRef();
    const groundRef = useRef();
    const arrowDownRef = useRef();
    const backgroundRef = useRef();

    useEffect(() => {
        let translate = [
            skyRef.current, titleRef.current, mountainLeftRef.current, mountainRightRef.current, 
            hillRightRef.current, groundRef.current, arrowDownRef.current
        ]
        parallaxExec(translate, backgroundRef.current, arrowDownRef.current)
    })

    return (
        <div>
                       
            <nav className="site-header sticky-top py-1">
                <div className="navSelections container d-flex flex-md-row justify-content-start">
                    <ul>
                        <li><a href="#projectID">Projects</a></li>
                        <li><a href="#skillsContainer">Skills</a></li>
                        <li><a href="#contactContainer">Contact</a></li>
                    </ul>
                </div>
                <div className="linkSelection container d-flex flex-md-row justify-content-end">
                    <svg id="navIcon" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://github.com/YipAnthony", "_blank")} width="25" height="25" className="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fillRule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
                    <svg id="navIcon" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://www.linkedin.com/in/anthony-yip/", "_blank")} width="25" height="25" className="navbar-nav-svg ml-2 " viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
            </nav>
            <div className="parallaxBackground" ref={backgroundRef}>
                <div className="filter"></div>
                <img className="sky translate" ref={skyRef} src={process.env.PUBLIC_URL + "/images/paralax/small/sky.png"} alt="sky" data-speed="0"></img>
                
                <div className="mainTitle translate" ref={titleRef} data-speed=".3">
                    <div className="col-md-5 textContainer">
                        <h1 className="display-1">Anthony Yip</h1>
                        <p className="lead">M.D. candidate/Fullstack developer</p>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>

                <img className="mountainLeft translate" ref={mountainLeftRef} src={process.env.PUBLIC_URL + "/images/paralax/small/mountainLeft.png"} alt="mountains" data-speed="-0.1"></img>
                <img className="mountainRight translate" ref={mountainRightRef} src={process.env.PUBLIC_URL + "/images/paralax/small/mountainRight.png"} alt="mountains" data-speed="-.05"></img>
                <img className="hillRight translate" ref={hillRightRef} src={process.env.PUBLIC_URL + "/images/paralax/small/hillRight.png"} alt="hills" data-speed="-0.2"></img>
                <img className="ground translate" ref={groundRef} src={process.env.PUBLIC_URL + "/images/paralax/small/ground.png"} alt="ground" data-speed="-0.2"></img>

                <div className="shadow"> </div>
                <a className="arrowDownPosition" href="#projectID">
                    <img className="arrowDown translate" ref={arrowDownRef} src={process.env.PUBLIC_URL + "/images/arrowDown.svg"} alt="down arrow" data-speed=".2"></img>

                </a>

            </div>
            
        </div>
    )
}
