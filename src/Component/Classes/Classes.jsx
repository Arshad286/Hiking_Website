import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import activityIcon from '../../assets/life.png';
import hikingIcon from '../../assets/hiking.png'; // Update this path
import mountainIcon from '../../assets/mountain.png'; // Update this path
import rockclimbing from '../../assets/rock-climbing.avif';
import './Classes.css'

function Classes() {
  return (
    <section className="classes-section">
      <Container>
        <div className='classes-heading'>
          <h1>HIKING AND CAMPING</h1>
          <h3>CLASSES</h3>
        </div>
        <Row>
          <Col md={4}>
            <Card style={{ border: 'none' }}>
              <Card.Body>
                <img src={activityIcon} alt="Activities" className="icon" />
                <Card.Title className='icon-title'>Activities</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, molestie posuere.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ border: 'none' }}>
              <Card.Body>
                <img src={hikingIcon} alt="Hiking" className="icon" />
                <Card.Title className='icon-title'>Hiking</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, molestie posuere.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ border: 'none' }}>
              <Card.Body>
                <img src={mountainIcon} alt="Mountains" className="icon" />
                <Card.Title className='icon-title'>Mountains</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, molestie posuere.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <section className="rock-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>ROCK <br/> CLIMBING</h1>
            <h2>1. CLASSES & EVENTS</h2>
            <p>
              Hatha is the most classic yoga. Its origin is in the Raya Yoga of Patanjali
              and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.
            </p>
            <hr />
            <p>10 modules divided  into 7 weekends</p>
            <div className="details">
              <p><strong>Start</strong><br />April 15<br />20.00 hs</p>
              <p><strong>Price</strong><br />$900</p>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="circle-image">
              <img src={rockclimbing} alt="Hiking" className="img-fluid rounded-circle" />
            </div>
            <p className="image-caption">WALKING IN NATURE AS A RECREATIONAL ACTIVITY</p>
          </Col>
        </Row>
      </Container>


    </section>
        </Container>

</section>         
    
 
  );
}

export default Classes;
