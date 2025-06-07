import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    useGSAP(() => {
  gsap.from("#para", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: "#para",
      start: "top 80%",
      end :"top 30%",
      scrub: 2
    }
  });
   gsap.from(".slider", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".slider",
      start: "top 80%",
      end :"top 30%",
      scrub: 2
    }
  });
});

  return (
   <div className="project">
    <h1 id="para">1+ Year Experience in Projects</h1>
    <div className="slider">
     
        <Card title="Virtual Assistant" image={va}/>
        <Card title="AI Powered Fitness Website" image={fw}/>
        <Card title="Virtual Assistant" image={va}/>
        <Card title="Virtual Assistant" image={va}/>
    </div>
   </div>
  )
}

export default Projects