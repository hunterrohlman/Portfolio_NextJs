import React from 'react'
import './education.css'
import Image from 'next/image';
import CUIcon from '../../assets/cu_logo.jpg';

export const Education = () => {
  return (
    <section id="education">
        <h1 className="educationTitle">Education</h1>
        <div className="eduBars">
            <div className="eduBar">
                <div className="eduBarText">
                    <h2>
                    University of Colorado Boulder
                    </h2>
                    <p>
                    Bachelor of Science: Aerospace Engineering
                    </p>
                </div>
                <Image src={CUIcon} alt="University of Colorado Boulder" className="eduBarImg"/>
            </div>
            <div className="eduBar">
                <div className="eduBarText">
                    <h2>
                    University of Colorado Boulder
                    </h2>
                    <p>
                    Minor: Computer Science
                    </p>
                </div>
                <Image src={CUIcon} alt="University of Colorado Boulder" className="eduBarImg"/>
            </div>
        </div>
    </section>
  )
}

export default Education
