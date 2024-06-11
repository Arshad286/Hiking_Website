import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import main from '../../assets/hiking.jpg';
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row>
          <Col>
            <div className="hero-content">
              <h1> <span>Discover your </span>
               <br />
               <span>next Hike </span></h1>
              <p>DISCOVER YOUR <br/> NEXT HIKE.<br/> Lorem ipsum dolor sit amet, <br/>consectetur <br/> adipiscing elit, sed do.</p>
            </div>
            <img src={main} alt="Hikers" className="img-fluid hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
