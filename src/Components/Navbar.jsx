import React, { useState, useEffect } from 'react';
import '../Styles/navbar.css';
import {DownloadIcon } from '@chakra-ui/icons'
import pdf from "../Assets/Nitin-Sharma-Resume.pdf"
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  

  function myFun(){
    const googleDriveLink = 'https://drive.google.com/file/d/1ogeR_CuagHTv7xA2Gg_nm1KBPe59zI8H/view?usp=sharing';

    
    

    
    window.open(googleDriveLink, '_blank');
  }

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  useEffect(() => {
    
    document.addEventListener('click', closeMenu);
    
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleMenuIconClick = (event) => {
   
    event.stopPropagation();
    toggleMenu();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Close the menu after clicking on a link
  };

  return (
    <nav  id="nav-menu" className="navbar" >
      <div className="container">
      <h1 className="logo" style={{ fontWeight: 'bold', fontSize: '32px' }}>Nitin Sharma</h1>

        <div className={`menu-icon ${isMenuActive ? 'active' : ''}`} onClick={handleMenuIconClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuActive ? 'menu active' : ''}`}>
          <li>
            <Button className="nav-link home" colorScheme={"white"} onClick={() => scrollToSection('home')}>Home</Button>
          </li>
          <li>
            <Button className="nav-link about" colorScheme={"white"} onClick={() => scrollToSection('about')}>About</Button>
          </li>
          <li>
            <Button className="nav-link projects" colorScheme={"white"} onClick={() => scrollToSection('projects')}>Projects</Button>
          </li>
          <li>
            <Button className="nav-link skills" colorScheme={"white"} onClick={() => scrollToSection('skills')}>My Skills</Button>
          </li>
          
          <li>
           
            
            <Button id="resume-button-1"   className="nav-link resume"colorScheme={"white"} onClick={myFun} >
               <a href={pdf} download>Resume <span> <DownloadIcon/></span></a>
             
             </Button>
           
           
            
          </li>
          <li>
            <Button className='nav-link contact' colorScheme={"white"} onClick={() => scrollToSection('contact')}>Contact</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
