import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import "./Contact.css";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import twitter from './../../assets/twitter.png';
import youtube from './../../assets/youtube.png';
import facebook from './../../assets/facebook.png';

const Contact = () => {
  return (
    <div className="section-container-1">
      <Header
        heading="Get in touch."
        details="Interested to collaborate? Feel free to drop me an email."
      />

      {/* Form section */}
      <div className="contact-form-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/xpzkkpgl"
          method="POST"
        >
          {/* Email Id Input */}
          <input
            type="email"
            placeholder="Your Email ID"
            name="_replyto"
            className="input-box email-input"
            autoComplete="off"
          />

          {/* Email Body */}
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box body-input"
          ></textarea>

          {/* Submit button */}
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      {/* Social icons */}
      <div className="social-icons-container">
        <a href="https://github.com/EpicDevv" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/zayne-lovecraft-0ba3a621a/"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
        <a href="https://www.instagram.com/epic_devv/" className="social-icon">
          <img src={instagram} alt="social" />
        </a>




        <a
              href="https://twitter.com/epic_devv"
              className="social-icon"
            >
              <img src={twitter} alt="social" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSm3TslJkZBoYs-qFC9G_4Q"
              className="social-icon"
            >
              <img src={youtube} alt="social" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071547166443"
              className="social-icon"
            >
              <img src={facebook} alt="social" />
            </a>
        
        {/* <a
                    href='https://medium.com/@madhavbahl'
                    className='social-icon'
                >
                    <img src={medium} alt='social' />
                </a>
                <a href='https://madhavbahl.tech' className='social-icon'>
                    <img src={web} alt='social' />
                </a> */}
      </div>

      <FooterLink phrase="Read more " toAdress="/about" link="about me." />

      <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
      </div>
    </div>
  );
};

export default Contact;
