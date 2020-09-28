import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import MainPanel from './MainPanel'
import Footer from './Footer'

function App() {
  let [tab, setTab] = useState("Projects")

  function handleTabClick (e) {
    let target = e.target
    setTab(()=> target.innerHTML)
  }
 

  return (
    <div className="App">
      <Header handleTabClick={handleTabClick}/>
      <MainPanel tab={tab}/>
      <Footer/>
      
    </div>
  );
}

export default App;
