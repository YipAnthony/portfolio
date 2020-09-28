import React from 'react'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'

export default function MainPanel(props) {
    if (props.tab === "Projects") return <Projects/>
    if (props.tab === "About Me") return <AboutMe/>
    if (props.tab === "Contact") return <Contact/>
}
