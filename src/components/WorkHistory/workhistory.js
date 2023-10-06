import React from "react";
import './workhistory.css';
import Image from "next/image";
import QCIcon from '../../assets/qualcommIcon.webp';
import GAIcon from '../../assets/gaIcon.png';
import CUIcon from '../../assets/cu_logo.jpg';

export const Workhistory = () => {
  return (
    <section id="workHistory">
        <h1 className="workTitle">Work Experience</h1>
        <span className="workHistDesc">
          Professionally, I have worked as a software engineer at General Atomics Electromagnetics, Qualcomm Technologies,
          and the University of Colorado Boulder.
        </span>
        <div className="workBars">
            <div className="workBar">
                <div className="workBarText">
                    <h2>
                    Qualcomm Technologies, Inc.
                    </h2>
                    <ul className="respList">
                        <li className="respListItem">
                        Led scoping and design reviews for the implementation of new features for both MAC and PHY layers.
                        </li>
                        <li className="respListItem">
                        Developed multiple features (C++/Python) implementing Carrier Aggregation in Mixed Numerologies for the MAC layer, improving throughput, bandwidth, capacity, and expanding test scenarios.
                        </li>
                        <li className="respListItem">
                        Implemented new logging packets and configuration validators to improve developer efficiency when debugging
                        </li>
                        <li className="respListItem">
                        Created and executed unit tests in the Google Test Framework
                        </li>
                        <li className="respListItem">
                        Supported the team through code review, bug triage/resolution, and providing feedback during design discussions.
                        </li>
                        <li className="respListItem">
                        Debugged issues utilizing GDB, code inspection, and static analysis
                        </li>
                        <li className="respListItem">
                        Analyzed, optimized, and streamlined code using advanced algorithms and data structures
                        </li>
                    </ul>
                </div>
                <Image src={QCIcon} alt="Qualcomm Technologies" className="workBarImg"/>
            </div>

            <div className="workBar">
                <div className="workBarText">
                    <h2>
                    General Atomics Electromagnetics
                    </h2>
                    <ul className="respList">
                        <li className="respListItem">
                        Developed and tested both ground software and embedded flight software for multiple spacecraft missions using C, C++, Python and SQL
                        </li>
                        <li className="respListItem">
                        Led and executed software and hardware testing on a hardware in the loop (HWIL) spacecraft simulator
                        </li>
                        <li className="respListItem">
                        Developed and integrated ground software into Space Missions Operations Center for the Argos-4 mission.
                        </li>
                        <li className="respListItem">
                        Designed user-friendly interfaces to simplify user interaction with software
                        </li>
                        <li className="respListItem">
                        Developed and conducted tests on various flight components to determine root causes of discrepancies
                        </li>
                    </ul>
                </div>
                <Image src={GAIcon} alt="General Atomics Electromagnetics" className="workBarImg"/>
            </div>

            <div className="workBar">
                <div className="workBarText">
                    <h2>
                    University of Colorado Boulder
                    </h2>
                    <ul className="respList">
                        <li className="respListItem">
                        Developed analytical models to simulate network capacity and utilization through MATLAB and Python
                        </li>
                        <li className="respListItem">
                        Analyzed resulting data through data analysis and visualization scripts written in C++ and Python specifically utilizing the Pandas and Numpy libraries.
                        </li>
                    </ul>
                </div>
                <Image src={CUIcon} alt="University of Colorado Boulder" className="workBarImg"/>
            </div>
        </div>
    </section>
  );
};

export default Workhistory