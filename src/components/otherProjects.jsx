import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { CardGroup, Col, Row } from 'react-bootstrap';

import "./otherProjects.css"


const ProjectCard = ({ name, location, description }) => {
  return (
    <Card className="text-center otherProjectsCard">
      <Card.Body className="otherProjectsCardBody">
        <Card.Title className="otherProjectsCardTitle">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted otherProjectsCardSubTitle">{location}</Card.Subtitle>
        <Card.Text className="otherProjectsCardText">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const OtherProjects = () => {
  const projects = [
    {
      name: 'Opera Grand Residential Tower',
      location: 'Downtown Burj Khalifa',
      description: '(4B+G+70) at downtown Burj Khalifa.',
    },
    {
      name: 'The Address Residence Dubai Opera',
      location: 'Dubai Opera',
      description: '(6B+G+64).',
    },
    {
      name: 'Al Habtoor City Complex',
      location: 'Shaik Zayed Road',
      description: 'At Shaik Zayed Road.',
    },
    {
      name: 'The Theater at Habtoor City',
      location: 'Habtoor City',
      description: '(La Perle by Dragone).',
    },
    {
      name: 'Park Heights at Dubai Hills',
      location: 'Dubai Hills',
      description: '',
    },
    {
      name: 'Golf Suites at Dubai Hills',
      location: 'Dubai Hills',
      description: '',
    },
    {
      name: 'Emaar Dubai South residential buildings',
      location: 'Dubai South',
      description: '(G+14) at Dubai South.',
    },
    {
      name: 'API-Barsha Tower',
      location: 'Barsha',
      description: '(B+G+19) at Barsha.',
    },
    {
      name: 'Multiple buildings at NEOM',
      location: 'NEOM',
      description: '',
    },
    {
      name: 'The peninsula development by Select group',
      location: '',
      description: 'Which consist of 3 towers (3B+G+40).',
    },
    {
      name: 'Al Suhub Restaurant',
      location: 'Cloud Lounge',
      description: '',
    },
    {
      name: 'Gym building at Al Forsan international sport resort',
      location: 'Abu Dhabi',
      description: 'In Abu Dhabi.',
    },
    {
      name: 'Jewel of the Creek development',
      location: '',
      description: 'Package 8 which includes 4 buildings (5B+G+20) and a ball room.',
    },
    {
      name: 'Qassim Dates Factory',
      location: 'Al-Qassim, KSA',
      description: 'In Al-Qassim, KSA.',
    },
    {
      name: 'Pearl Tower',
      location: 'Surat, India',
      description: '(2-B+G+21-TYP) in Surat, India.',
    },
    {
      name: "Bukhatter Women's College",
      location: 'Sharjah',
      description: '(B+G+2) in Sharjah (floor area = 8715 m2).',
    },
    {
      name: 'Residential Building',
      location: 'Iraq',
      description: '(B+G+6) in Iraq (floor area =1481 m2).',
    },
      {
    name: 'College of Pharmacy',
    location: 'Qatar University, Qatar',
    description: 'College of Pharmacy in Qatar University, Qatar',
  },
  {
    name: 'Educational Department Building and Library Building',
    location: 'Karbala University, Iraq',
    description: 'Educational department building and library building in Karbala University, Iraq',
  },
  {
    name: 'C14 Tower',
    location: 'Emiratis City, Ajman',
    description: 'Tower in Emiratis City, Ajman, UAE',
  },
  {
    name: 'QC02 Tower',
    location: 'Aqua City, Ajman',
    description: 'Tower in Aqua City, Ajman, UAE',
  },
  {
    name: 'Saffarini Tower',
    location: 'Tajikistan',
    description: 'Tower in Tajikistan',
  },
  {
    name: '400-Bed Educational Hospital',
    location: 'Najaf, Iraq',
    description: 'Educational hospital in Najaf, Iraq',
  },
  {
    name: 'Juba Palace Hotel and Resort',
    location: 'Juba, Sudan',
    description: 'Hotel and resort in Juba, Sudan',
  },
    
      ];


  const [showProjects, setShowProjects] = useState(false);

  const handleViewMore = () => {
    setShowProjects(true);
  };

  const handleHideProjects = () => {
    setShowProjects(false);
  };

  return (
    <div className="projects">
    <div className="container otherProjectsContainer">
      <div className="row row-cols-3 g-4 mx-auto otherProjectsRow">
        {showProjects && projects.map((project, index) => (
          <div key={index} className="col otherProjectsCol">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      
      <div className="mt-3 d-flex justify-content-center">
        {!showProjects && (
          <button className="btn btn-primary viewMoreButton mx-auto" onClick={handleViewMore}>
            View More Projects
          </button>
        )}
        {showProjects && (
          <button className="btn btn-secondary HideButton mx-auto" onClick={handleHideProjects}>
            Hide Projects
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default OtherProjects;