import React from 'react'
import con from "../../assets/contact.png";
import "./Contact.css";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)


function Contact() {
        useGSAP(() => {
  gsap.from(".leftcontact img", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".leftcontact img",
      start: "top 80%",
      end:"top 30%",
      scrub: 2
    }
  });
   gsap.from("form", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: "form",
      start: "top 80%",
      scrub: 2
    }
  });
});
  return (
    <div id="Contact">
        <div className="leftcontact">
    <img src={con} alt="" />

        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/mrbkeozg" method="POST">
                <input name="Username" type="text" placeholder='Name'/>
                <input name="Email" type="email" placeholder='Email'/>
                <textarea name="Message" id="textarea" placeholder='Message'></textarea>
                <input type="submit" id="button" value="Submit" />
            </form>


        </div>


    </div>
  )
}

export default Contact