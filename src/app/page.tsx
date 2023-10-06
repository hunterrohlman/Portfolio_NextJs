import React from 'react';
import Intro from '../components/Intro/intro.js';
import Navbar from '../components/Navbar/navbar.js';
import Skills from '../components/Skills/skills.js';
import Workhistory from '../components/Workhistory/workhistory.js';
import Education from '../components/Education/education.js';
import Contact from '../components/Contact/contact.js';
import Footer from '../components/Footer/footer.js';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Workhistory/>
      <Education/>
      <Contact/>
      <Footer/>
    </main>
  )
}
