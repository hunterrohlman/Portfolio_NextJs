"use client";
import React, { useRef } from 'react';
import './contact.css';
import Image from 'next/image';
import GithubBanner from '../../assets/githubbanner.png';
import LinkedinBanner from '../../assets/linkedinbanner.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zkf0hfp', 'template_tfzq4mg', form.current, 'Ba4gsgUO_cnVYQ5eI')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent!')
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="user_name" />
                <input type="email" className="email" placeholder='Your Email' name="user_email" />
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>

            <div className="links">
                <button className='linkBtn' onClick={()=> window.location.href = "https://www.github.com/hunterrohlman"}>
                    <Image src={GithubBanner} alt="Github" className='link'/>
                </button>
                <button className='linkBtn' onClick={()=> window.location.href = "https://www.linkedin.com/in/hunter-rohlman-1611a5159/"}>
                    <Image src={LinkedinBanner} alt="LinkedIn" className='link'/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Contact
