import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalSubtitle from "react-bootstrap/ModalTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';


import "./skills.css";



    const jobListings = [
    {
      title: 'Senior Structural Engineer',
      company: 'Khatib & Alami CEC',
      location: 'Dubai, UAE',
      date: 'March 2015 - October 2022',
      duties: [
        'Prepare structural concept design sketches and coordinate it with architects and other disciplines.',
        'Completed accurate engineering calculations for weights, loads and other metrics using both manual and digital methods.',
        'Build structural analysis and design models using suitable program (ETABS, SAFE, SAP2000 or STAAD).',
        'Assisted drafters in developing structural design of products using drafting tools or computer-assisted design software (Revit or Auto-CAD).',
        'Coordinate structural design parameters and design criteria with local authorities.',
        'Obtain approval from local authorities and 3rd party on structural drawings and calculations in order get building permit.',
        'Review structural design submittals and respond to RFIs.',
        'Perform design review and design verification procedures as per company\'s quality standards.',
        'Participated in design reviews within team-based structural planning committees.'
      ]
    },
        {
      title: 'Structural Engineer',
      company: 'Kling Consult GmbH',
      location: 'Dubai, UAE',
      date: 'October 2013 - March 2015',
      duties: [
        'Managed and led the design and analysis of complex steel and concrete structures for commercial, industrial, and residential projects.',
        'Performed calculations for wind loads, seismic loads, and other environmental loads.',
        'Coordinated structural design parameters and design criteria with architects and other disciplines.',
        'Prepared technical reports and specifications for construction projects.',
        'Reviewed and approved shop drawings and submittals from contractors.',
        'Coordinated with architects, contractors, and other engineers to ensure that project specifications were met and design considerations were integrated.',
        'Conducted site visits to assess project progress and ensure that construction was in accordance with the design and specifications.',
        'Reviewed and analyzed engineering drawings, calculations, and reports to ensure accuracy and compliance with local and international building codes and standards.',
        'Prepared technical reports and presentations for clients, stakeholders, and regulatory agencies.'
      ]
    },
    {
      title: 'Structural Engineer',
      company: 'Mimar Emirates Engineering consultant',
      location: 'Sharjah, UAE',
      date: 'July 2012 - October 2013',
      duties: [
    'Designed and analyzed steel structures, ensuring compliance with local building codes and international standards',
    'Collaborated with architects and other engineering disciplines to develop comprehensive structural solutions',
    'Prepared detailed design drawings and specifications, utilizing industry-standard software and tools',
    'Managed projects from concept through construction, overseeing contractors and ensuring quality control',
    'Conducted site visits and inspections to assess existing structures and provide recommendations for repairs or upgrades',
    'Maintained accurate project documentation, including progress reports, design changes, and meeting minutes',
    'Provided technical support and guidance to junior staff, fostering a culture of continuous learning and professional development',
    'Communicated effectively with clients and stakeholders, building strong working relationships and ensuring project success',
      ]
    },
    {
      title: 'Structural Designer',
      company: 'Addnan Saffarini Office',
      location: 'Dubai, UAE',
      date: 'October 2009 - July 2012',
      duties: [
  "Assisted senior engineers in design and analysis of structural systems",
  "Created and reviewed technical drawings and specifications",
  "Performed site visits and inspections to ensure structural integrity and compliance with regulations",
  "Collaborated with architects, contractors, and other stakeholders on project design and execution",
  "Prepared project reports and documentation",
  "Assisted in project management tasks, such as scheduling and budgeting",
  "Kept up-to-date with industry standards and best practices",
  "Participated in professional development opportunities to improve technical skills and knowledge"
      ]
    }
  ];


const SkillsSection = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

const handleReadMore = (index) => {
  setSelectedJob(jobListings[index]);
  setShowModal(true);
  console.log(selectedJob); // add this line
};

  const handleClose = () => setShowModal(false);


   console.log(jobListings[0].title);

     useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <section id="skills" className="py-5 skills-section">
      <Container>
        <h2 className="text-center mb-5" data-aos="zoom-out" data-aos-duration="1200">My Professional Odyssey: A Timeline of My Career Journey</h2>
        <Row>
          {jobListings.map((job, index) => (
            <Col md={6} lg={6} className="mb-4" key={index}>
              <div  data-aos="zoom-in" data-aos-duration="1200">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {job.company}
                  </Card.Subtitle>
                  <Card.Text>{job.location}</Card.Text>
                  <Card.Text className="text-muted">{job.date}</Card.Text>
                  
                  <Button
                    variant="primary"
                    onClick={() => handleReadMore(index)}
                    className="jobCardButton text-center"
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
              </div>
            </Col>
          ))}
        </Row>
<Modal show={showModal} onHide={handleClose} animation={false} style={{opacity:1}} data-aos="zoom-in" data-aos-duration="1200">
  {selectedJob && (
    <>
      <ModalHeader closeButton>
        <ModalTitle>{selectedJob.title}</ModalTitle>
        <ModalSubtitle className="mb-2 text-light">
          {selectedJob.company}
        </ModalSubtitle>
      </ModalHeader>
      <ModalBody>
        <p>{selectedJob.location}</p>
        <ul className="modalUl">
          {selectedJob.duties.map((duty, index) => (
            <li className="modalLi" key={index}>{duty}</li>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button className="modalCloseButton" variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </ModalFooter>
    </>
  )}
</Modal>

      </Container>
            <Container>
        <Row>
          <Col md={4}>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className="card mb-5 shadow-lg rounded-lg">
              <div className="card-header bg-primary text-white fw-bold">
                Professional Skills
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Design of steel, concrete, and timber structures</li>
                <li className="list-group-item">BIM modeling</li>
                <li className="list-group-item">CSI softwares ETABS, SAFE & SAP2000 and STAAD pro</li>
                <li className="list-group-item">Autodesk Revit, AutoCAD & BIM360</li>
                <li className="list-group-item">ACI 318, ASCE 7 & AISC Code</li>
                <li className="list-group-item">Blueprint Interpretation</li>
              </ul>
            </div>
            </div>
          </Col>
          <Col md={4}>
            <div data-aos="fade-up" data-aos-duration="1200">
            <div className="card mb-5 shadow-lg rounded-lg">
              <div className="card-header bg-success text-white fw-bold">
                Fun
              </div>
              <ul className="list-group list-group-flush">
                      <li className="list-group-item">Playing football with friends</li>
      <li className="list-group-item">Hiking and exploring the natural landscape of Oregon</li>
      <li className="list-group-item">Attending live music events and concerts</li>
      <li className="list-group-item">Trying new restaurants and cuisines</li>
      <li className="list-group-item">Traveling to new countries and experiencing different cultures</li>
              </ul>
            </div>
            </div>
          </Col>
          <Col md={4}>
          <div data-aos="fade-up" data-aos-duration="1400">          
            <div className="card mb-5 shadow-lg rounded-lg">
              <div className="card-header bg-secondary text-white fw-bold">
                Interests
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Green building design</li>
                <li className="list-group-item">Renewable energy</li>
                <li className="list-group-item">Smart cities</li>
                <li className="list-group-item">Sustainable urban planning</li>
                <li className="list-group-item">Disaster-resilient infrastructure</li>
                <li className="list-group-item">Innovations in steel design software and tools</li>
              </ul>
            </div>
            </div> 
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

// test

export default SkillsSection;
