import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LaptopIcon from '@mui/icons-material/Laptop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resume.css'; // Make sure to create and import this CSS file

const Resume = () => {
  return (
    <Container fluid className="px-0">
      <Container className="py-5">
        <Row>
          <Col md={12} className="text-center">
            <h1 id="RESUME" className="display-4">MY RESUME</h1>
            <div className="heading-underline mb-4">
              <div className="anihead"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <h3 className="mb-3"><AutoStoriesIcon /> Educational Qualification</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Plus Two (Humanities)</strong>
                <p><SchoolIcon /> HSS KERALASSERI PKD</p>
              </li>
              <li>
                <strong>C, Java, Python, Js</strong>
                <p><SchoolIcon /> On Youtube (Brototype, debug media...)</p>
              </li>
              <li>
                <strong>Webdesigning (HTML, CSS, Bootstrap, Js) and Git</strong>
                <p><SchoolIcon /> On Youtube (Brototype, debug media...) and W3Schools</p>
              </li>
              <li>
                <strong>Logical work outs</strong>
                <p><SchoolIcon /> LeetCode and Hacker Rank</p>
              </li>
              <li>
                <strong>Node, Mongodb, Express, React</strong>
                <p><SchoolIcon /> Open Source online</p>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <h3 className="mb-3"><HomeRepairServiceIcon /> Working Experience</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Internship (C, Java, Js, Bootstrap)</strong>
                <p><SchoolIcon /> Brototype (2.5 Months)</p>
              </li>
              <li>
                <strong>Internship (MERN STACK)</strong>
                <p><SchoolIcon /> Softroniics (7 Months)</p>
              </li>
            </ul>
            <h3 className="mb-3" style={{ color: 'yellow' }}><LaptopIcon /> Filled Experience</h3>
            <p><SchoolIcon /> 2.4 Years</p>
          </Col>
          <Col md={12} lg={4} className="mb-4">
            <h3 className="mb-3">Skills</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Programming languages:</strong>
                <p>C, Java, Python, Js</p>
              </li>
              <li>
                <strong>Web development:</strong>
                <p>HTML, CSS, Bootstrap, Js</p>
              </li>
              <li>
                <strong>Databases:</strong>
                <p>Mongodb</p>
              </li>
              <li>
                <strong>Frameworks:</strong>
                <p>Node, Express, React</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
