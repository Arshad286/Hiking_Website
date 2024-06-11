import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ice from '../../assets/ice.jpeg'
import view from '../../assets/view.jpg'
import './additionsection.css'


const AdditionalSection = () => {
  return (
    <section>
      <Container>
      <section className="ice-section">
      <Container>
        <Row className="align-items-center">
        <Col md={6} className="text-center">
            <div className="circle-image">
              <img src={ice} alt="Hiking" className="img-fluid rounded-circle" />
            </div>
            <p className="ice-caption">WALKING IN NATURE AS A RECREATIONAL ACTIVITY</p>
          </Col>
          <Col md={6}>
            <h1>Mountaineering  <br/> Ice Climbing</h1>
            <h2>1. ACTIVITIES</h2>
            <p>
            Kundalini is the most classic yoga... Its origin is in the Raya Yoga of Patanjali
              and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.
            </p>
            <hr />
            <p>17 modules <br/> divided  into 5 weekends</p>
            <div className="details">
              <p><strong>Start</strong><br />April 15<br />20.00 hs</p>
              <p><strong>Price</strong><br />$900</p>
            </div>
          </Col>

<section className='view'>
          <Col md={12}>
          <Card className='text-center view-card'>
            <Card.Img  className='image' src={view} />
            <Card.Body className='view-body'>
              <Card.Title className='view-title'>The Asanas Purify Our Body</Card.Title>
              <Card.Text className='view-text'>
                <p>Keep it healthy, making it a suit- <br/>able vehicle for the soul.</p>
                <button className="btn btn-primary">See More</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </section>
          
        </Row>
      </Container>


    </section>
      </Container>


    </section>
      );
};

export default AdditionalSection;
