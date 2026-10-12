import React from 'react';
import Vedant from '../../assets/me-about.jpg';
import { FaAward, FaBootstrap, FaCode, FaCss3, FaCubes, FaGithub, FaHandshake, FaHtml5, FaWordpress } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoJquery, BiPhotoAlbum, BiTask } from 'react-icons/bi';
import { RiAngularjsFill, RiReactjsLine } from 'react-icons/ri';
import { LuSparkles } from "react-icons/lu";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const About = () => {
  return (
    <section className='about-me mt-large' id='about'>
      <div className="container">
        <div className="row align-items-end">
          <div className='col-md-5'>
            <img src={Vedant} alt="" className='img-fluid' />
          </div>
          <div className='col-md-7'>
            <div className="our-heads">
              <h6 className="overlay-heading">about</h6>
              <h2 className="primary-heading">who <span>am i ?</span></h2>
              <div className="space-one"></div>
            </div>
            <div className="content-para">
              <p><strong>Results driven Web Designer and Frontend Development professional</strong> with 6+ years of experience in responsive website design, UI development, and website maintenance.</p>
              <p>Proficient in <strong>HTML5, CSS3/SCSS, JavaScript, jQuery, Bootstrap, WordPress, and Adobe Photoshop</strong>. Experienced in developing websites from scratch, creating pixel-perfect and cross-browser-compatible interfaces, and managing multiple websites across diverse organizational environments.</p>
              <p>Familiar with <strong>Angular and React</strong>, with a strong focus on usability, responsive design, and delivering high-quality web experiences. Eager to contribute technical expertise and creative problem-solving skills to a growth-oriented IT organization.</p>
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
                  <BiTask />
                  <h6 className="duration">20<sup>+</sup></h6>
                  <div className="content-para">
                    <p>Projects</p>
                  </div>
                </div>
              </div>
              <div className="experience-grid-items">
                <div className="card">
                  <FaHandshake />
                  <h6 className="duration">100<sup>+</sup></h6>
                  <div className="content-para">
                    <p>Clients</p>
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
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="toolsCard">
                <div className="head">
                  <div className="hicon">
                    <FaCode />
                  </div>
                  <strong>Core Frontend</strong>
                  <span className='stack'>5 Stack</span>
                  <span className="cat">FRONT-END</span>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <FaHtml5 />
                          </div>
                          <div className="lang">
                            <strong>HTML5</strong>
                            <small>Markup</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>80<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 80%, #0c130b 20%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <FaCss3 />
                          </div>
                          <div className="lang">
                            <strong>CSS / SCSS</strong>
                            <small>Styling</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>85<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 85%, #0c130b 15%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <FaBootstrap />
                          </div>
                          <div className="lang">
                            <strong>Bootstrap</strong>
                            <small>Framework</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>75<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 75%, #0c130b 25%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <BiLogoJavascript />
                          </div>
                          <div className="lang">
                            <strong>JavaScript</strong>
                            <small>Logic</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>60<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 60%, #0c130b 40%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                           <BiLogoJquery />
                          </div>
                          <div className="lang">
                            <strong>jQuery</strong>
                            <small>Library</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>60<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 60%, #0c130b 40%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12"></div>
                  <div className="col-md-12">
                    <div className="optimizing bg">
                      <div className="optimiz-icon">
                        <LuSparkles />
                      </div>
                      <div className="optimiz-content">
                        <p><strong>Pixel-perfect, cross-browser compatible </strong>— built for performance and SEO.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="toolsCard">
                <div className="head">
                  <div className="hicon">
                    <FaCubes />
                  </div>
                  <strong>CMS & Tools</strong>
                  <span className='stack'>5 Stack</span>
                  <span className="cat">TOOLS</span>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <FaWordpress />
                          </div>
                          <div className="lang">
                            <strong>WordPress</strong>
                            <small>CMS</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>80<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 80%, #0c130b 20%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <BiPhotoAlbum />
                          </div>
                          <div className="lang">
                            <strong>Photoshop</strong>
                            <small>Design</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>70<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 70%, #0c130b 30%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Advaced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <RiAngularjsFill />
                          </div>
                          <div className="lang">
                            <strong>Angular JS</strong>
                            <small>Framework</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>50<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 50%, #0c130b 50%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Intermediate</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <RiReactjsLine />
                          </div>
                          <div className="lang">
                            <strong>React JS</strong>
                            <small>Library</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>65<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 65%, #0c130b 35%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="skillsCard">
                      <div className="topLeft"></div>
                      <div className="topRight"></div>
                      <div className="skill">
                        <div className="left">
                          <div className="icon">
                            <FaGithub />
                          </div>
                          <div className="lang">
                            <strong>GitHub</strong>
                            <small>Workflow</small>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rate">
                            <h4 className='tertiaryHeading'>85<span>%</span></h4>
                          </div>
                        </div>
                      </div>
                      <div className="skillRate" style={{background: "linear-gradient(90deg, #6ac860 85%, #0c130b 15%)"}}></div>
                      <div className="levels">
                        <span>Proficiency</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12"></div>
                  <div className="col-md-12">
                    <div className="optimizing">
                      <div className="optimiz-icon">
                        <AiOutlineDeploymentUnit />
                      </div>
                      <div className="optimiz-content">
                        <p><strong>Pixel-perfect, cross-browser compatible </strong>— built for performance and SEO.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
