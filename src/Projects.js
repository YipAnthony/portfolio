import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper styles

export default function Projects() {

    

    return (
        <div id="projectID" className="projectsBody">
            <h1 className="projectContainerTitle display-3 font-weight-normal">Featured Projects: </h1>
            <div className="caroselContainer">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                    <div className="card shadow-sm">
                                    <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/blog1.png"} alt="Blog Image"/>
                                    <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/blog.gif"} alt="Blog animation"/>
                                    <div className="card-body">
                                        <p className="card-text lead"><strong>Blogpage</strong>
                                        
                                        </p>
                                        <p className="card-text">CRUD blog application. Built with MongoDB, Node.js (Express), and EJS templates for server-side rendered pages. Incorporated Passport.js for
                                        user creation/authentication and TinyMCE as a rich text editor.</p>
                                    
                                        <p className="card-text"> Stack: 
                                            <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="HTML, JS, CSS" width="70" height="25"/>
                                            <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/node.png"} alt="Node" width="24" height="23"/>
                                            <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/mongodb.png"} alt="Mongodb" width="24" height="23"/>
                                            <span className="card-text float-right">
                                                <a className="d-md-inline-block" href="https://generic-blogsite.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                Website
                                                </a>
                                                <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/blogServer" target="_blank" rel="noopener noreferrer">
                                                    GitHub
                                                </a>
                                            </span>
                                        </p>
                                        
                                    </div>
                                </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card shadow-sm">
                                    <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/ai1.png"} alt="AI Med Student"/>
                                    <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/aimedstudent.gif"} alt="AI Med Student project animation"/>
                                    <div className="card-body">
                                        <p className="card-text lead"><strong>AI Medical Student</strong>
                                        
                                        </p>
                                        <p className="card-text">Clinical training tool for medical students, allowing input of patient information to generate red flag symptoms, clarification questions, and a working differential diagnosis. Integrates React modules and the Infermedica API.</p>
                                    
                                        <p className="card-text"> Stack: 
                                            <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="HTML, JS, CSS" width="70" height="25"/>
                                            <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/react.png"} alt="React" width="24" height="23"/>
                                            <span className="card-text float-right">
                                                <a className="d-md-inline-block" href="https://yipanthony.github.io/MedStudentAI/" target="_blank" rel="noopener noreferrer">
                                                Website
                                                </a>
                                                <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/MedStudentAI/" target="_blank" rel="noopener noreferrer">
                                                    GitHub
                                                </a>
                                            </span>
                                        </p>
                                        
                                    </div>
                                </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card shadow-sm">
                                    <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/todo5.png"} alt="Restaurant project animation"/>
                                    <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/todo.gif"} alt="To-do list project animation"/>
                                    <div className="card-body">
                                        <p className="card-text lead"><strong>To-do List</strong>
                                        
                                        </p>
                                        <p className="card-text">Allows users to create tasks with due date, details, and grouping by projects. Side panel filters by daily/weekly tasks and project categories. Integrates user sign-up, authentication, and Firestore database.</p>
                                    
                                        <p className="card-text"> Stack: 
                                            <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="HTML, JS, CSS" width="70" height="25"/>
                                            <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/firebase.svg"} alt="Firebase" width="26" height="23"/>
                                            <span className="card-text float-right">
                                                <a className="d-md-inline-block" href="https://yipanthony.github.io/betterToDoList/" target="_blank" rel="noopener noreferrer">
                                                Website
                                                </a>
                                                <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/betterToDoList" target="_blank" rel="noopener noreferrer">
                                                    GitHub
                                                </a>
                                            </span>
                                        </p>
                                        
                                    </div>
                                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card shadow-sm">
                                    <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/sb3.png"} alt="Restaurant project animation"/>
                                    <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/sb.gif"} alt="Soundboard project animation"/>
                                    <div className="card-body">
                                        <p className="card-text lead">
                                            <strong>Soundboard</strong>
                                        </p>
                                        <p className="card-text">Allows users to select from pre-loaded sounds, drag/drop onto a virtual numberpad, play and adjust speed/volume</p>
                                        <p className="card-text">Stack:  
                                                <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="JS, CSS, HTML" width="70" height="25"/>
                                                <span className="btn-group float-right">
                                    
                                                    <a className="d-md-inline-block" href="https://yipanthony.github.io/soundboard/" target="_blank" rel="noopener noreferrer">
                                                        Website
                                                    </a>
                                            
                                                    <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/soundboard" target="_blank" rel="noopener noreferrer">
                                                        Github
                                                    </a>
                                                </span>
                                        </p>
                                    
                                    </div>
                                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card shadow-sm">
                                    <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/rps1.png"} alt="RPS game"/>
                                    <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/rps1.png"} alt="RPS game"/>
                                    <div className="card-body">
                                        <p className="card-text lead">
                                            <strong>Rock-Paper-Scissors Game</strong>
                                        </p>
                                        <p className="card-text">Basic Rock-paper-scissors game, practicing vanilla JS animations and DOM manipulation.</p>
                                        <p className="card-text">Stack:  
                                                <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="JS, CSS, HTML" width="70" height="25"/>
                                                <span className="btn-group float-right">
                                    
                                                    <a className="d-md-inline-block" href="https://yipanthony.github.io/rockPaperScissors/" target="_blank" rel="noopener noreferrer">
                                                        Website
                                                    </a>
                                            
                                                    <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/rockPaperScissors/" target="_blank" rel="noopener noreferrer">
                                                        Github
                                                    </a>
                                                </span>
                                        </p>
                                    
                                    </div>
                                </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            {/* <div id="projectsContainer" className="album py-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                    
                    <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/blog1.png"} alt="Blog Image"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/blog.gif"} alt="Blog animation"/>
                                <div className="card-body">
                                    <p className="card-text lead"><strong>Blogpage</strong>
                                       
                                    </p>
                                    <p className="card-text">CRUD blog application. Built with MongoDB, Node.js (Express), and EJS templates for server-side rendered pages. Incorporated Passport.js for
                                    user creation/authentication and TinyMCE as a rich text editor.</p>
                                   
                                    <p className="card-text"> Stack: 
                                        <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="HTML, JS, CSS" width="70" height="25"/>
                                        <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/node.png"} alt="Node" width="24" height="23"/>
                                        <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/mongodb.png"} alt="Mongodb" width="24" height="23"/>
                                        <span className="card-text float-right">
                                            <a className="d-md-inline-block" href="https://generic-blogsite.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            Website
                                            </a>
                                            <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/blogServer" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>  
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/ai1.png"} alt="AI Med Student"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/aimedstudent.gif"} alt="AI Med Student project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead"><strong>AI Medical Student</strong>
                                       
                                    </p>
                                    <p className="card-text">Clinical training tool for medical students, allowing input of patient information to generate red flag symptoms, clarification questions, and a working differential diagnosis. Integrates React modules and the Infermedica API.</p>
                                   
                                    <p className="card-text"> Stack: 
                                        <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="HTML, JS, CSS" width="70" height="25"/>
                                        <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/react.png"} alt="React" width="24" height="23"/>
                                        <span className="card-text float-right">
                                            <a className="d-md-inline-block" href="https://yipanthony.github.io/MedStudentAI/" target="_blank" rel="noopener noreferrer">
                                            Website
                                            </a>
                                            <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/MedStudentAI/" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>  
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/todo5.png"} alt="Restaurant project animation"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/todo.gif"} alt="To-do list project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead"><strong>To-do List</strong>
                                       
                                    </p>
                                    <p className="card-text">Allows users to create tasks with due date, details, and grouping by projects. Side panel filters by daily/weekly tasks and project categories. Integrates user sign-up, authentication, and Firestore database.</p>
                                   
                                    <p className="card-text"> Stack: 
                                        <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="HTML, JS, CSS" width="70" height="25"/>
                                        <img className="card-text mb-1 ml-1" src={process.env.PUBLIC_URL + "/images/firebase.svg"} alt="Firebase" width="26" height="23"/>
                                        <span className="card-text float-right">
                                            <a className="d-md-inline-block" href="https://yipanthony.github.io/betterToDoList/" target="_blank" rel="noopener noreferrer">
                                            Website
                                            </a>
                                            <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/betterToDoList" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/login1.png"} alt="Restaurant project animation"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/loginmodule.gif"} alt="Login module project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>npm Login Module</strong>
                                    </p>
                                    <p className="card-text">Creates a user login/signup module. Signup form inplements client-side Javascript form validation with easily customizable password security options. </p>
                                    <p className="card-text">Stack:  
                                            <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="JS, CSS, HTML" width="70" height="25"/>
                                            <span className="btn-group float-right">
                                
                                            <a className="d-md-inline-block" href="https://yipanthony.github.io/loginPackage/" target="_blank" rel="noopener noreferrer">
                                               Website
                                            </a>
                                    
                                            <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/loginPackage" target="_blank" rel="noopener noreferrer">
                                                Github
                                            </a>
                                            <a className="d-md-inline-block ml-2" href="https://www.npmjs.com/package/loginpackage-themddropout" target="_blank" rel="noopener noreferrer">
                                                npm
                                            </a>
                                        </span>
                                            
                                    </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/rest3.png" alt="Restaurant project animation"/>
                                <img id="restaurantCard" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/restaurant.gif" alt="Restaurant project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>Restaurant Page</strong>
                                    </p>
                                    <p className="card-text">Mock restaurant page using only vanilla JS for element create and DOM manipulation</p>
                                    <p className="card-text">Stack:  
                                        <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "//stack.png" alt="JS, CSS, HTML" width="70" height="25"/>
                                        <span className="btn-group float-right">
                                            
                                            <a className="d-md-inline-block" href="https://yipanthony.github.io/restaurantPage/" target="_blank" rel="noopener noreferrer">
                                                Website
                                            </a>
                                    
                                            <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/restaurantPage" target="_blank" rel="noopener noreferrer">
                                                Github
                                            </a>
                                        </span>
                                    </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/sb3.png"} alt="Restaurant project animation"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/sb.gif"} alt="Soundboard project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>Soundboard</strong>
                                    </p>
                                    <p className="card-text">Allows users to select from pre-loaded sounds, drag/drop onto a virtual numberpad, play and adjust speed/volume</p>
                                    <p className="card-text">Stack:  
                                            <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="JS, CSS, HTML" width="70" height="25"/>
                                            <span className="btn-group float-right">
                                
                                                <a className="d-md-inline-block" href="https://yipanthony.github.io/soundboard/" target="_blank" rel="noopener noreferrer">
                                                    Website
                                                </a>
                                        
                                                <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/soundboard" target="_blank" rel="noopener noreferrer">
                                                    Github
                                                </a>
                                            </span>
                                    </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/rps1.png"} alt="RPS game"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src={process.env.PUBLIC_URL + "/images/rps1.png"} alt="RPS game"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>Rock-Paper-Scissors Game</strong>
                                    </p>
                                    <p className="card-text">Basic Rock-paper-scissors game, practicing vanilla JS animations and DOM manipulation.</p>
                                    <p className="card-text">Stack:  
                                            <img className="card-text mb-2 ml-1" src={process.env.PUBLIC_URL + "/images/stack.png"} alt="JS, CSS, HTML" width="70" height="25"/>
                                            <span className="btn-group float-right">
                                
                                                <a className="d-md-inline-block" href="https://yipanthony.github.io/rockPaperScissors/" target="_blank" rel="noopener noreferrer">
                                                    Website
                                                </a>
                                        
                                                <a className="d-md-inline-block ml-2" href="https://github.com/YipAnthony/rockPaperScissors/" target="_blank" rel="noopener noreferrer">
                                                    Github
                                                </a>
                                            </span>
                                    </p>
                                
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
        </div>
    )
}
