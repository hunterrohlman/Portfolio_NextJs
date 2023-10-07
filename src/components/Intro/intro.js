"use client";
import React from "react";
import "./intro.css";
import bg from "../../assets/linkedinpfpsmall.jpg"
import linkedInImg from "../../assets/linkedin.png"
import Image from "next/image";

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent"> 
            <span className="hello">Hello,</span>
            <span className="introText"> I&apos;m 
              <span className="introName"> Hunter</span> 
              <br />
              Embedded Developer
            </span>
        <p className="introPara">I am a skilled embedded developer with a background in 5G NR and space</p>
          <button className="btn" onClick={()=> window.location.href = "https://www.linkedin.com/in/hunter-rohlman-1611a5159/"}>
            <Image src={linkedInImg} alt="Hire Me" className="btnimg"/>
            <p className="btnText">LinkedIn</p>
          </button>
        </div>
        <Image src={bg} alt="Profile" className="bg" />

    </section>
  )
}

export default Intro;