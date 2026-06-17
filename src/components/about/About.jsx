import React from 'react';
import Vedant from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { SiTask } from "react-icons/si";
import { SiSuperuser } from "react-icons/si";
import CircularCounter from '../CircularCounter/CircularCounter';

const About = () => {
  return (
    <section className='about-me mt-large' id='about'>
      <div className="container">
        <div className="row align-items-end">
          <div className='col-md-6'>
            <img src={Vedant} alt="" className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <div className="our-heads">
              <h6 className="overlay-heading">about</h6>
              <h2 className="primary-heading">who <span>am i ?</span></h2>
              <div className="space-one"></div>
              <div className="content-para">
                <p>Hello, I'm Vedant a Frontend Developer from Lucknow, India, with experience in designing and developing responsive websites and web applications. I specialize in <strong>HTML5, CSS3/SCSS, JavaScript, WordPress, Bootstrap, jQuery, and Photoshop</strong>, with expertise in converting <strong>PSD/Figma/XD designs into pixel-perfect, responsive websites</strong>.</p>
                <p>I am passionate about building modern, user-friendly digital experiences and continuously enhancing my skills in frontend technologies.</p>
              </div>
              <div className="experience-grid">
                <div className="experience-grid-items">
                  <div className="card">
                    <FaAward />
                    <h6 className="duration">6<sup>+</sup> years</h6>
                    <div className="content-para">
                      <p>Expereince</p>
                    </div>
                  </div>
                </div>
                <div className="experience-grid-items">
                  <div className="card">
                    <SiTask />
                    <h6 className="duration">20<sup>+</sup></h6>
                    <div className="content-para">
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
                <div className="experience-grid-items">
                  <div className="card">
                    <SiSuperuser />
                    <h6 className="duration">100<sup>+</sup></h6>
                    <div className="content-para">
                      <p>Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-large">
          <div className="our-heads">
            <h6 className="overlay-heading">skills</h6>
            <h2 className="primary-heading text-center">Ready to <span>Serve</span></h2>
            <div className="space-one"></div>
          </div>
          <div className="content-para text-center">
            <p>Experience prompt, professional service tailored to your needs. From start to finish, we’re dedicated to delivering quality and exceeding expectations. Ready to serve you with excellence—your satisfaction is our priority.</p>
          </div>
          <CircularCounter maxValue={100} animationDuration={1000} />
        </div>
      </div>
    </section>
  )
}

export default About
