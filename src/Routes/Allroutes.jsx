import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import TechStack from '../Components/TechStack'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tech-stack" component={TechStack} />
        <Route path="/my-skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
  )
}

export default Allroutes