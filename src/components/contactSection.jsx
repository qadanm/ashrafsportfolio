import React from "react"
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./contactSection.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
    useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="mb-4" data-aos="fade-left" data-aos-duration="1200">Get in Touch</h2>
            <p className="lead mb-5" data-aos="fade-left" data-aos-duration="1600">Interested in working together or just want to say hello? Drop me a line and I'll get back to you as soon as possible!</p>
          </div>
        </div>
<div className="row contactRow d-flex justify-content-center">
  <div className="col-lg-4 mx-auto d-flex justify-content-between">
    <div className="d-flex flex-column align-items-center mb-5" data-aos="zoom-in" data-aos-duration="1200">
      <a href="mailto:qashraf1987@me.com" className="text-decoration-none">
        <div className="d-flex align-items-center justify-content-center contact-icon emailIcon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="contact-text">Email</div>
      </a>
    </div>
    <div className="d-flex flex-column align-items-center mb-5" data-aos="zoom-in" data-aos-duration="1500">
      <a href="tel:5037293722" className="text-decoration-none">
        <div className="d-flex align-items-center justify-content-center contact-icon phoneIcon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="contact-text">Phone</div>
      </a>
    </div>
    <div className="d-flex flex-column align-items-center mb-5" data-aos="zoom-in" data-aos-duration="1800">
      <a href="https://www.linkedin.com/in/ashraf-qadan-f-e-4107b337/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
        <div className="d-flex align-items-center justify-content-center contact-icon linkedInIcon">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="contact-text">LinkedIn</div>
      </a>
    </div>
  </div>
</div>

        <div className="row" data-aos="zoom-out" data-aos-duration="1350">
          <div className="col-lg-8 mx-auto text-center">
            <a href="https://bold.pro/my/ashraf-qadan-230207224413/350/contact" target="_blank" className="btn btn-primary btn-lg contact-btn contact-form-btn">Contact Form <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;