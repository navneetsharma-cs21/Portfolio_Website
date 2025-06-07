import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)


export const About = () => {
useGSAP(() => {
  gsap.from(".circle", {
    x: -100,
    opacity: 0,
    duration: 1,// makes them cascade like falling stars
 scrollTrigger: {
  trigger: ".circle",
  start: "top 60%",    // when .circle's top reaches 50% viewport height
  end: "top 30%",      // when .circle's top reaches 20% viewport height
  scrub: 2,            // smooth syncing with scroll
      // for debugging, showing start/end markers
}

  });

   gsap.from(".line", {
    x: -100,
    opacity: 0,
    duration: 1,// makes them cascade like falling stars
    stagger:1,
 scrollTrigger: {
  trigger: ".line",
  start: "top 60%",    // when .circle's top reaches 50% viewport height
  end: "top 30%",      // when .circle's top reaches 20% viewport height
  scrub: 2,            // smooth syncing with scroll
        // for debugging, showing start/end markers
}

  });

     gsap.from(".aboutdetails h1", {
    x: -100,
    opacity: 0,
    duration: 1,// makes them cascade like falling stars
    stagger:1,
 scrollTrigger: {
  trigger: ".aboutdetails h1",
  start: "top 60%",    // when .circle's top reaches 50% viewport height
  end: "top 30%",      // when .circle's top reaches 20% viewport height
  scrub: 2,            // smooth syncing with scroll
     // for debugging, showing start/end markers
}

  });
    gsap.from(".aboutdetails ul", {
    y: 100,
    opacity: 0,
    duration: 1,// makes them cascade like falling stars
    stagger:1,
 scrollTrigger: {
  trigger: ".aboutdetails ul",
  start: "top 60%",    // when .circle's top reaches 50% viewport height
  end: "top 30%",      // when .circle's top reaches 20% viewport height
  scrub: 2,            // smooth syncing with scroll
     // for debugging, showing start/end markers
}

  });
    gsap.from(".rightabout", {
    x: 100,
    opacity: 0,
    duration: 1,// makes them cascade like falling stars
    stagger:1,
 scrollTrigger: {
  trigger: ".rightabout",
  start: "top 60%",    // when .circle's top reaches 50% viewport height
  end: "top 30%",      // when .circle's top reaches 20% viewport height
  scrub: 2,            // smooth syncing with scroll
      // for debugging, showing start/end markers
}

  });
});


  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
           <div className="circle"></div>
          <div className="line"></div>
           <div className="circle"></div>
        </div>
        <div className="aboutdetails">

        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li><span>Name:</span>Navneet Sharma</li>
            <li><span>Age:</span>21yr.</li>
            <li><span>Gender:</span>Male</li>
            <li><span>Language Known:</span>Hindi/English</li>
          </ul>
        </div>

        <div className="Education">
          <h1>Education</h1>
          <ul>
            <li><span>Degree:</span>B.Tech</li>
            <li><span>Branch:</span>Computer Science & Engineering</li>
            <li><span>CPI:</span>75%</li>
          </ul>
        </div>

        <div className="Skills">
          <h1>Skills</h1>
          <ul>
            <li>MERN Stack Web Developer</li>
            <li>DSA</li>
            <li>Python</li>
          </ul>
        </div>
</div>
      </div>
       <div className="rightabout">
  <Card title="MERN Stack Web Developer" image={mern}/>
  <Card title="JAVA" image={java} />
  <Card title="DSA" image={dsa}/>
</div>

    </div>
  )
}
