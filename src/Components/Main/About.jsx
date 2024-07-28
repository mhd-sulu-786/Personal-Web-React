import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Make sure to create and import this CSS file

const About = () => {
  const [val_1, setval_1] = useState(0);
  const [val_2, setval_2] = useState(0);
  const endfrontend = 80;
  const endbackend = 85;

  useEffect(() => {
    let val1 = 0;
    let val2 = 0;
    const interval = setInterval(() => {
      if (val1 <= endfrontend) {
        setval_1(val1);
        val1++;
      }
      if (val2 <= endbackend) {
        setval_2(val2);
        val2++;
      }
      if (val1 > endfrontend && val2 > endbackend) {
        clearInterval(interval);
      }
    }, 50); // Adjust speed of increment
    return () => clearInterval(interval);
  }, [endfrontend, endbackend]);

  return (
    <Container fluid className="about-container p-0 "  id="ABOUT" style={{borderBottom:'1px solid black'}}>
      <Container className="py-5">
        <Row>
          <Col md={6} className="text-center">
            <img className=" my-img" src="https://avatars.githubusercontent.com/u/144138399?v=4" alt="about-img" />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4 about-title mb-3">About</h1>
            <ul className="list-unstyled about-details">
              <li className="mb-2"><strong>First Name:</strong> MUHAMMED</li>
              <li className="mb-2"><strong>Last Name:</strong> SULAIMAN.T</li>
              <li className="mb-2"><strong>Age:</strong> 19</li>
              <li className="mb-2"><strong>Nationality:</strong> India</li>
              <li className="mb-2"><strong>Languages:</strong> English, Malayalam</li>
              <li className="mb-2"><strong>Address:</strong> kongad Palakkad Kerala 678631</li>
              <li className="mb-2"><strong>Phone:</strong> 9037435846</li>
              <li className="mb-2"><strong>Freelance:</strong> Available</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="text-center">
            <SkillBar label="Frontend Development" percentage={val_1} />
          </Col>
          <Col md={6} className="text-center">
            <SkillBar label="Backend Development" percentage={val_2} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const SkillBar = ({ label, percentage }) => {
  return (
    <div className="skill-bar-container d-flex flex-column justify-content-center align-items-center mb-4">
      <h6 className="lead mb-2">{label} - <span className="text-success">{percentage}%</span></h6>
      <div className="skill-bar rounded">
        <div className="skill-bar-inner" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default About;
