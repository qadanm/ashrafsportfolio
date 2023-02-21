import React from 'react';
import { useEffect } from 'react';
import Ashraf from "../assets/IMG_9776.JPG";
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./hero.css";


function HeroSection() {
    useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <header className="bg-light py-5 hero-section" id="hero">
      <Container>
        <Row className="align-items-center hero-section-container">
          <Col md={6} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">Ashraf Qadan</h1>
            <h2 className="fw-light" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1400">Senior Structural Engineer</h2>
            <p className="lead my-4">I am an experienced structural engineer with expertise in designing safe and sustainable structures for a variety of projects.</p>
            <Button data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" variant="primary" size="lg" mx-auto d-block href="https://bold.pro/my/ashraf-qadan-230207224413/350/contact" target="_blank">Contact me</Button>
          </Col>
          <Col md={6}>
            <img src={Ashraf} alt="Ashraf Qadan" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default HeroSection;
