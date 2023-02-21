import React from 'react';
import { useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import TheAddressImg from "../assets/ADDRESS_DUBAI_OPERA.jpg";
import ParkHeightsImg from "../assets/PARK_HEIGHTS_1-1620x832.jpg";
import LaPerle from "../assets/La-Perle.jpg";
import LegoLand from "../assets/legoland-dubai-entrance.jpg";
import TheCloudLounge from "../assets/The-Cloud-Lounge.png";
import AlForsan from "../assets/alforsan.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./projects.css";

const cardData = [
  {
    title: 'The Address Residence Dubai Opera',
    img: `${TheAddressImg}`,
    desc: 'Address Residences Dubai Opera is an exclusive serviced apartment development. The design of the two sleek towers, one featuring 64 stories, the other 56, was inspired by the sailboats of the Arabian Sea. The structural system is based on a centric reinforcement concrete core which hosts the elevators, staircases and MEP/services rooms.',
    projectLink: 'https://properties.emaar.com/en/our-communities/downtown-dubai/',
    googleMapsLink: 'https://maps.app.goo.gl/23CxmxoR9uq15ho57?g_st=ic',
    dataAos: 'fade-right',
    dataAosDuration: '1400'
  },
  {
    title: 'Park Heights at Dubai Hills',
    img: `${ParkHeightsImg}`,
    desc: 'The development consists of 3 residential buildings (18 stories) and 2 office buildings (7 & 9 stories). There is one basement under the entire development. The structural system consists of shear walls with centric core wall. The foundation of the residential buildings was deep piles with pile caps whileThe foundation for the office buildings is raft foundation.',
    projectLink: 'https://properties.emaar.com/en/properties/park-heights-i/',
    googleMapsLink: 'https://maps.app.goo.gl/95BFZWyNda5qttgN9?g_st=ic',
    dataAos: 'fade-left',
    dataAosDuration: '1600'
  },
  {
    title: 'The Theater at Habtoor City (La Perle by Dragone)',
    img: `${LaPerle}`,
    desc: 'The theater is part of Al Habtoor City development which hosts 3 hotels and the theater. La Perle is a water theater show. “270-degree seating provides a different perspective of the action unfolding in the tailor-made aqua theatre. Witness the stage flood with water and drain in a matter of seconds as the artists perform mind-blowing aqua and aerial feats, such as diving from 25 meters high.”',
    projectLink: 'https://www.laperle.com/en',
    googleMapsLink: 'https://maps.app.goo.gl/iMrkPRqrQUDDHvLD7?g_st=ic',
    dataAos: 'fade-right',
    dataAosDuration: '1400'
  },
  {
    title: 'Lego Land Dubai at Dubai Parks and Resorts',
    img: `${LegoLand}`,
    desc: 'Lego land is a kids theme park located in Dubai park and resorts in Dubai, UAE. The structural system is based on steel structure moment resisting frames with bracing. The foundation is isolated shallow footings with the exception to Mini-land and the Castle which are supported on piles.',
    projectLink: 'https://www.legoland.com/dubai/explore/legoland-dubai/',
    googleMapsLink: 'https://maps.app.goo.gl/dEZ9MNi7P2yFYuNX8?g_st=ic',
    dataAos: 'fade-left',
    dataAosDuration: '1600'
  },
  {
    title: 'Al Suhub Restaurant (Cloud lounge)',
    img: `${TheCloudLounge}`,
    desc: 'Al Suhub Restaurant is built on top of a mountain 600 meters above sea level. It is an iconic landmark that have a charming panoramic view of the city of Khorfakkan, UAE. The structural system is steel moment resisting frame with bracing. The foundation was a combination of shallow raft and strip footings. The major challenge was the stability of the soil under the foundation since the building is next to a steep slope on one side. Close coordination with the geotechnical specialist was needed to achieve safe and stable foundation.',
    projectLink: 'https://www.visitsharjah.com/activities/nature/al-suhub-rest-house/',
    googleMapsLink: 'https://maps.app.goo.gl/ZhD5u8MbUeRrBXPU6?g_st=ic',
    dataAos: 'fade-right',
    dataAosDuration: '1400'
  },
  {
    title: 'Gym building | Al Forsan international Resort',
    img: `${AlForsan}`,
    desc: 'The gym building consist of Ground floor (for parking), 1st and 2nd floor for the GYM. The gym hosts swimming pool, running track, MMA training room, Boxing Hall & Yoga Studio. The building dimensions are around 125m by 75m. The ground floor is a concrete slab on grade. The first floor is a suspended reinforced concrete slab with drop panels and some interior beams. The second floor is steel structure with composite deck slab. The roof is a space truss. Reinforced concrete core walls hosting the staircases and the the elevators were used to resist lateral loads.',
    projectLink: 'https://alforsan.com/',
    googleMapsLink: 'https://maps.app.goo.gl/j1nr9kE7MzNyxwkD9?g_st=ic',
    dataAos: 'fade-left',
    dataAosDuration: '1600'
  }
];

const CardSection = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="projects" id="projects">
        <section className="container">
            <h2 className="text-center mb-5">From Concept to Creation: Explore My Project Portfolio</h2>
        <Row xs={1} md={2} className="g-4">
            {cardData.map((card, index) => (
            <Col key={index}>
                <Card className="custom-card" data-aos={card.dataAos} data-aos-duration={card.dataAosDuration}>
                <Card.Img variant="top" src= {card.img}/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.desc}</Card.Text>
                    <div className="card-buttons">
                    <Button variant="primary" href={card.projectLink}  target="_blank">Project link</Button>
                    <Button variant="secondary" href={card.googleMapsLink}  target="_blank">Google Maps link</Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </section>
    </div>
  );
};

export default CardSection;
