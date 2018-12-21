import React from 'react';
import {Carousel} from 'react-bootstrap';
import hs1o from '../../Assets/hs1o.png';
import hs2o from '../../Assets/hs2o.png';
import hs3o from '../../Assets/hs3o.png';
import sd from '../../Assets/1sto.png';
import './Corousel.css';

export default class Corousel extends React.Component {

  render() {
    return (
      <div className="cor">
      <Carousel indicators={false} controls={false} interval={3000}>
      <Carousel.Item>
  
        <img
          className="d-block w-100"
          src={hs1o}
          alt="First slide"
        />

        <Carousel.Caption>
          <h1 className='corText'>Move to Canada</h1>
          <p >We have offices both in Canada and India</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hs1o}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h1 className='corText'>Study in Canada</h1>
          <p>Get high quality education</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hs2o}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h1 className='corText'>Work in Canada</h1>
          <p>shape your career in best working environmen .</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hs3o}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h1 className='corText'>Visit Canada</h1>
          <p>Unpack an incredible experience</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
  }
}