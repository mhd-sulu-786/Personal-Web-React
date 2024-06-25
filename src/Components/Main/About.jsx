import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import webimage from '../assist/code.png';
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
    <Container fluid className="p-0">
      <Container className="py-5">
        <Row>
          <Col md={6} className="text-center">
            <img className="img-fluid rounded-circle" src="https://avatars.githubusercontent.com/u/144138399?v=4" alt="about-img" />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4 mb-3">About</h1>
            <ul className="list-unstyled">
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
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={6} className="text-center">
            <h1 className="display-4 mb-3">Skills</h1>
            <Row>
              <Col md={6} className="d-flex flex-column justify-content-center text-center">
                <SkillCircle percentage={val_1} label="FRONT END" />
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center text-center">
                <SkillCircle percentage={val_2} label="BACKEND" />
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <SkillBar label="HTML && CSS" percentage={90} />
            <SkillBar label="JS" percentage={80} />
            <SkillBar label="BOOTSTRAP" percentage={75} />
            <SkillBar label="REACT" percentage={85} />
            <SkillBar label="NODE JS" percentage={78} />
            <SkillBar label="EXPRESS JS" percentage={79} />
            <SkillBar label="MONGODB" percentage={82} />
            <SkillBar label="GIT" percentage={86} />
            <SkillBar label="JAVA" percentage={60} />
            <SkillBar label="C" percentage={89} />
            <SkillBar label="PYTHON" percentage={40} />
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={12} className="text-center">
            <h1 className="display-4 mb-3">Services</h1>
            <Row>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <div className="service-icon rounded-circle border border-primary p-4 mb-3">
                  <img className="img-fluid" src={webimage} alt="Web Development" />
                </div>
                <h2 className="display-5 mb-3 text-primary">Web Development</h2>
                <p className="lead">
                  Welcome to our web development services! We specialize in crafting dynamic, user-centric websites tailored to meet your specific needs. Our services include custom website development, responsive design, e-commerce solutions, content management systems (CMS), and web application development. Whether you're an individual, a start-up, or a well-established business, we're dedicated to providing you with high-quality, scalable, and cost-effective web solutions that drive your online presence forward. We focus on combining creativity and functionality to deliver websites that not only look great but also perform seamlessly across all devices. Let us bring your vision to life on the web!
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const SkillCircle = ({ percentage, label }) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="circle-progress rounded-circle p-4 mb-3">
        <div className="circle-progress-child rounded-circle p-4">
          <span className="display-4">{percentage}%</span>
        </div>
      </div>
      <span className="lead">{label}</span>
    </div>
  );
};

const SkillBar = ({ label, percentage }) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h6 className="lead mb-2">{label} - <span className="text-success">{percentage}%</span></h6>
      <div className="skill-bar rounded p-2">
        <div className="skill-bar-inner" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default About;
