import React from 'react';
import { FiUsers } from 'react-icons/fi';

const Services = () => {
  return (
    <section id='services' className="services mt-large">
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">services</h6>
          <h2 className="primary-heading text-center">what <span>we offer !</span></h2>
          <div className="space-one"></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="web-cards">
              <FiUsers />
              <h2 className="secondaryHeading">Website Design</h2>
              <div className="content-para">
                <p>We bring your online vision to life by designing very user friendly Website for our clients which are also flexible for any device around the World.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="web-cards">
              <FiUsers />
              <h2 className="secondaryHeading">Web Development</h2>
              <div className="content-para">
                <p>Our skilled team creates visually captivating websites that leave a lasting impression on your audience. With custom development and functionality. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="web-cards">
              <FiUsers />
              <h2 className="secondaryHeading">Graphic Design</h2>
              <div className="content-para">
                <p>We have a very dedicated team of creative mind graphics which design like graphics are telling that for what they are designed by by implementing their creativity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
