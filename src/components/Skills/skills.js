import React from 'react';
import './skills.css';
import Image from 'next/image';
import Space from '../../assets/satellite.png';
import WebDesign from '../../assets/website-design.png'
import NewRadio from '../../assets/5gAnt.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span> <br/>
        <span className='skillDesc'>
            I am a skilled and passionate embedded devloper with a focus in 5G NR and space. I specialize in C++ 
            and Python development, while I utilize JavaScript/TypeScript and React for personal development projects.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <Image src={NewRadio} alt="5G NR" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>
                    5G New Radio
                    </h2>
                    <p className="skillBarText">
                    3GPP 5G featues in C++/Python/TSN.1
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <Image src={Space} alt="Space" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>
                    Space
                    </h2>
                    <p className="skillBarText">
                    Robust flight-ready software in C/C++
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <Image src={WebDesign} alt="Web Design" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>
                    Web Design
                    </h2>
                    <p className="skillBarText">
                    Smooth and reactive software in JavaScript/TypeScript/React
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills