import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {


  return (
    <div className="App">
      <Header/>
      <Projects/>
      <Skills />
      <Contact />
      <Footer/> 
      
    </div>
  );
}

export default App;
