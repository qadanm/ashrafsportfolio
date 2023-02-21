
import { Container } from 'react-bootstrap'

import DubaiVideo from "../assets/dubai.mp4";

import './dubai.css';

function Dubai() {
  return (
    <section className="dubai">
<video autoPlay={true} loop muted>
         <source src={DubaiVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="hero-text">
        <Container>
          <h1>Building Dubai's Future</h1>
          <br /><hr /><br />
          <h2>As a senior structural engineer with 13 years of experience in Dubai, I have played a significant role in the city's building boom and technological advancements. My expertise in designing and implementing innovative and sustainable solutions for complex structures, using the latest software and working closely with local contractors and suppliers, has made me a valuable asset to many of the city's leading engineering firms.</h2>
                <video autoPlay loop muted>
        <source src="../assets/dubai.mp4" type="video/mp4" />
      </video>
        </Container>
      </div>
    </section>
    
  );
}
export default Dubai;


// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import dubaiVideo from '../assets/dubai.mp4';

// function Dubai() {
//   return (
//     <section id="hero" className="dubai d-flex align-items-center">
//       <video autoPlay={true} loop muted>
//         <source src={dubaiVideo} type="video/mp4" />
//       </video>
//       <Container>
//         <Row className="justify-content-center hero-content">
//           <Col lg={8} className="text-center">
//             <h1>Ashraf, Structural Engineer in Dubai</h1>
//             <p>
//               With over 13 years of experience working on cutting-edge projects in Dubai, I have the expertise to deliver innovative solutions for your structural engineering needs.
//             </p>
//             <Button variant="primary">View Projects</Button>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Dubai;
