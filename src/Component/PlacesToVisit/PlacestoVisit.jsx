// src/PlacesToVisit.js
import React from 'react';
import './PlacesToVisit.css';
import mountain from '../../assets/trail3.jpg'
import mountain2 from '../../assets/trail.jpg'
import mountain3 from '../../assets/trail2.jpg'


const places = [
  {
    title: 'Mountain Loop',
    description: 'Lorem ipsum sit amet, consectetur adipisicing...',
    location: '0.3 miles',
    image: mountain
  },
  {
    title: 'National Park',
    description: 'Lorem ipsum dolor amet, consectetur adipisicing...',
    location: '0.2 miles',
    image: mountain2
  },
  {
    title: 'Canyon Trail',
    description: 'Lorem ipsum dolor sit consectetur adipisicing...',
    location: '0.6 miles',
    image: mountain3
  }
];

const PlacestoVisit = () => {
  return (
    
    <div className="container text-center  placestovisit">
      <h2 className="my-4 header-title">
        <span>PLACES TO VISIT </span>
        <br/>
        <span className="autumn-subtitle"> IN AUTUMN </span>


        </h2>
      <div className="row">
        {places.map((place, index) => (
          <div className="col-md-4 mb-4" key={index} >
            <div className="card h-100" style={{ border: 'none' }}>
              <img src={place.image} className=" row-image" alt={place.title} />
              <div className="card-body">
                <h5 className="card-title">{place.title}</h5>
                <p className="card-text">{place.description}</p>
                <hr/>
                <p className="location"><strong>Location {place.location}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline-primary">see more</button>
    </div>
   
  );
}

export default PlacestoVisit;
