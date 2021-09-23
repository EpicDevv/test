import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import Logo from "./../../assets/logo.png";
import twitter from './../../assets/twitter.png';
import youtube from './../../assets/youtube.png';
import facebook from './../../assets/facebook.png';
import "./Home.css";
import Footerr from "../Footerr/Footerr";

class Home extends Component {
  state = { showModal: false };

  // componentDidMount() {
  //     setTimeout(() => {
  //         this.setState({ showModal: true });
  //     }, 1000);
  // }

  // closeModal = () => {
  //     this.setState({ showModal: false });
  // };

  render() {
    return (
      <section>

        <div className="logo">
          <a href="/home">
          <img className="logo-img" src={Logo} alt="" />
          </a>
        </div>

        <div className="home-container">
          {this.state.showModal && <Modal closeModal={this.closeModal} />}
          <div className="header-text">

            <h2>Portfolio</h2>
            <h1>Zayne Lovecraft</h1>


            <p>Zayne here! Thank you for being interested in viewing my work as a Web Developer! If you are looking to collab with me or just want to explore my best projects, you are in the right place!</p>

            <p className="p2">REACT.JS FRONTEND DEVELOPER</p>
            <img className="responsive-img" src="https://www.bluetext.com/wp-content/uploads/2020/08/blog-01-01.jpg" alt="social" />
          </div>
          <div className="head-btns">
            <Link to="/about" className="btn btn-white">
              <p className="btn-text">ABOUT ME</p>
            </Link>
            <Link to="/contact" className="btn btn-transparent">
              <p className="btn-text">CONTACT ME</p>
            </Link>
            <Link to="/projects" className="btn btn-transparent">
              <p className="btn-text">MY PROJECTS</p>
            </Link>
          </div>
          

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
            <a
              href="https://www.instagram.com/epic_devv/"
              className="social-icon"
            >
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
        </div>
        <div>
          <Footerr />
        </div>
      </section>
    );
  }
}

export default Home;
