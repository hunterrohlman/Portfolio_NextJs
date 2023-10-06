import React from 'react';
import Intro from '../components/Intro/intro';
import Navbar from '../components/Navbar/navbar';
import Skills from '../components/Skills/skills';
import Workhistory from '../components/Workhistory/workhistory';
import Education from '../components/Education/education';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';
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
