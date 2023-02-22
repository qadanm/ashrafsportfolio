import React from "react";
import { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './footer.css'

function PortfolioFooter() {
    useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5 className="footer-title">About Me</h5>
            <p className="footer-text">
              I'm a team-oriented Senior Structural Engineer with 13 years of industry experience. I'm proficient in ETABS, SAFE, and STAAD Pro, and have a passion for green building design, renewable energy, smart cities, sustainable urban planning, and disaster-resilient infrastructure. 
            </p>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#skills" className="footer-link">Resume</a>
              </li>
              <li>
                <a href="#projects" className="footer-link">Portfolio</a>
              </li>
              <li>
                <a href="https://bold.pro/my/ashraf-qadan-230207224413/350/contact" target="_blank" className="footer-link">Contact</a>
              </li>
              <li>
                <a href="#hero" className="footer-link">Back to the top</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Contact</h5>
            <ul className="list-unstyled footer-contact">
              <li>
                <a href="mailto:john@example.com" className="footer-link">qashraf1987@me.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="footer-link">(503) 729-3722</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4 footer-divider" /> {/* Add margin and custom class name to the <hr> element */}
        <p className="text-center footer-rights">
          &copy; {new Date().getFullYear()} Ashraf Qadan. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default PortfolioFooter;
