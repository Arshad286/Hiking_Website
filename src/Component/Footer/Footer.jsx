// src/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import hikingIcon from '../../assets/main-logo.png'; // Update this path

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={3}>
            <h5>ABOUT</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ultimam quantum.</p>
          </Col>
          <Col md={3}>
            <h5>ABOUT</h5>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Join us</li>
              <li>Ethic</li>
              <li>Goals</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>ABOUT</h5>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Join us</li>
              <li>Ethic</li>
              <li>Goals</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>ABOUT</h5>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Join us</li>
              <li>Ethic</li>
              <li>Goals</li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <img src={hikingIcon} alt="Hiking Icon" className="footer-icon" />
          <span className="footer-logo">Hiking <span className="footer-logo-highlight">Life</span></span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
