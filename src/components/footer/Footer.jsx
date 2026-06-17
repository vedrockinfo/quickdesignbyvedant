import React from 'react';
import Contact from '../contact/Contact';

const Footer = () => {
  return (
    <div className='footer mt-large' id='footer'>
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">contacts</h6>
          <div className="space-one"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h2 className="primary-heading text-center">Get in <span>Touch</span></h2>
            <div className="space-one"></div>
            <div className="footer-contact-grid">
              <div className="card-box">
                <div className="icon"></div>
                <div className="name">Call Us</div>
                <div className="content-para">
                  <p><a href="tel:+917905359039">+91 7905 359 039</a></p>
                </div>
              </div>
              <div className="card-box">
                <div className="icon"></div>
                <div className="name">Email Us</div>
                <div className="content-para">
                  <p><a href="mailto:frontendesigner@gmail.com">frontendesigner@gmail.com</a></p>
                </div>
              </div>
              <div className="card-box">
                <div className="icon"></div>
                <div className="name">Address</div>
                <div className="content-para">
                  <p className='text-white'>Sector-C Jankipuram Lucknow, Uttar Pradesh, India<br />Pin Code - 226021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h2 className="primary-heading text-center">Contact <span>Us</span></h2>
            <div className="space-one"></div>
              <Contact />
          </div>
        </div>
      </div>
      <div className="footer-copyright mt-large">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">Copyright &copy; 2023 All Right Reserved. Quick Design By Vedant </p>
            </div>
            <div className="col-md-6">
              <div className="footerlinks">
                <ul>
                  <li><a href="#">terms & condition</a></li>
                  <li>|</li>
                  <li><a href="3">privacy policy</a></li>
                </ul>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
