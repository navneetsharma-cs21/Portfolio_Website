import React, { useRef } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

function Nav() {
  let menu = useRef();
  let mobile = useRef();
  useGSAP(()=> {
    let tl = gsap.timeline();
    tl.from("nav h1",{
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    tl.from("nav ul li", {
      y: -100,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
     
    })

    

})

  return (
    <nav>
      <h1>Portfolio</h1>
      <ul className='Desktop-menu'>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={700}><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={700}><li>About</li></Link>
        <Link to="project"  activeClass='active' spy={true} smooth={true} duration={700}><li>Projects</li></Link>
        <Link to="Contact"  activeClass='active' spy={true} smooth={true} duration={700}><li>Contact</li></Link>
      </ul>

      <div className="hamburger" ref={menu} onClick={() => {
        mobile.current.classList.toggle("activemobile");
        menu.current.classList.toggle("activeham");
      }}>

        
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>


      <ul className='Mobile-menu' ref={mobile}>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={700}><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={700}><li>About</li></Link>
        <Link to="project"  activeClass='active' spy={true} smooth={true} duration={700}><li>Projects</li></Link>
        <Link to="Contact"  activeClass='active' spy={true} smooth={true} duration={700}><li>Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;