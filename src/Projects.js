import React from 'react'

// function clickCard(e){
//     window.open("https://yipanthony.github.io/betterToDoList/",'_blank')
// }
export default function Projects() {
    return (
        <div>
            <div id="projectsContainer" className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src="./images/ai1.png" alt="AI Med Student"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src="./images/aimedstudent.gif" alt="AI Med Student project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead"><strong>AI Medical Student</strong>
                                       
                                    <small className="text-muted float-right">10/17/2020</small>
                                    </p>
                                    <p className="card-text">Clinical training tool for early medical students, allowing input of patient information to generate red flag symptoms to ask, additional clarification questions, and a differential diagnosis. Integrates React modules and the Infermedica API.</p>
                                   
                                    <p className="card-text"> Stack: 
                                        <img className="card-text mb-2 ml-1" src="images/stack.png" alt="HTML, JS, CSS" width="70" height="25"/>
                                        <img className="card-text mb-1 ml-1" src="images/react.png" alt="React" width="26" height="23"/>
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
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src="./images/todo5.png" alt="Restaurant project animation"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src="./images/todo.gif" alt="To-do list project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead"><strong>To-do List</strong>
                                       
                                    <small className="text-muted float-right">9/20/2020</small>
                                    </p>
                                    <p className="card-text">Allows users to create tasks with due date, details, and grouping by projects. Side panel filters by daily/weekly tasks and project categories. Integrates user sign-up, authentication, and Firestore database.</p>
                                   
                                    <p className="card-text"> Stack: 
                                        <img className="card-text mb-2 ml-1" src="images/stack.png" alt="HTML, JS, CSS" width="70" height="25"/>
                                        <img className="card-text mb-1 ml-1" src="images/firebase.svg" alt="Firebase" width="26" height="23"/>
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
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src="./images/login1.png" alt="Restaurant project animation"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src="./images/loginmodule.gif" alt="Login module project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>npm Login Module</strong>
                                        <small className="text-muted float-right">9/19/2020</small>
                                    </p>
                                    <p className="card-text">Creates a user login/signup module. Signup form inplements client-side Javascript form validation with easily customizable password security options. </p>
                                    <p className="card-text">Stack:  
                                            <img className="card-text mb-2 ml-1" src="images/stack.png" alt="JS, CSS, HTML" width="70" height="25"/>
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
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src="./images/rest3.png" alt="Restaurant project animation"/>
                                <img id="restaurantCard" className="bd-placeholder-img card-img-top" height="225" src="./images/restaurant.gif" alt="Restaurant project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>Restaurant Page</strong>
                                        <small className="text-muted float-right">9/10/2020</small>
                                    </p>
                                    <p className="card-text">Mock restaurant page using only vanilla JS for element create and DOM manipulation</p>
                                    <p className="card-text">Stack:  
                                        <img className="card-text mb-2 ml-1" src="images/stack.png" alt="JS, CSS, HTML" width="70" height="25"/>
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
                                <img id="cardCoverImage" className="bd-placeholder-img card-img-top" height="225" src="./images/sb3.png" alt="Restaurant project animation"/>
                                <img className="bd-placeholder-img card-img-top" height="225" src="./images/sb.gif" alt="Soundboard project animation"/>
                                <div className="card-body">
                                    <p className="card-text lead">
                                        <strong>Soundboard</strong>
                                        <small className="text-muted float-right">9/1/2020</small>
                                    </p>
                                    <p className="card-text">Allows users to select from pre-loaded sounds, drag/drop onto a virtual numberpad, play and adjust speed/volume</p>
                                    <p className="card-text">Stack:  
                                            <img className="card-text mb-2 ml-1" src="images/stack.png" alt="JS, CSS, HTML" width="70" height="25"/>
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

                    </div>
                </div>
            </div>
        </div>
    )
}
