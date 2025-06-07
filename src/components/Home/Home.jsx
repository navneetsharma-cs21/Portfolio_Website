import React from 'react';
import './Home.css';
import man from '../../assets/man.png';
import { Typewriter } from 'react-simple-typewriter';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

export default function Home() {
useGSAP(() => {
  let tl1 = gsap.timeline();
   tl1.from(".line1",{
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    tl1.from(".line2",{
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    tl1.from(".line3",{
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    gsap.from(".righthome img",{
       x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
   })

})

















  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">NAVNEET SHARMA</div>
          <div className="line3">
         <Typewriter
              words={['A Web Developer', 'A Software Developer', 'Editor']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME!</button>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="Profile Illustration" />
      </div>
    </div>
  );
}
