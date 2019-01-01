import React from 'react';
import {Carousel} from 'react-bootstrap';
import visit from '../../Assets/visitcanada.png';
import work from '../../Assets/workincanada.png';
import study from '../../Assets/studyincanada.png';
import move from '../../Assets/movetocanda.png';

import './Corousel.css';

export default class Corousel extends React.Component {

  render() {
    return (
      <div className="cor">
      <Carousel indicators={false} controls={false} interval={3000}>
      <Carousel.Item>
  
        <img
          className="d-block w-100 image-container"
          src={move}
          alt="First slide"
        />

        

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-container"
          src={study}
          alt="Third slide"
        />
    
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-container"
          src={work}
          alt="Third slide"
        />
    
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 image-container"
          src={visit}
          alt="Third slide"
        />
    
      </Carousel.Item>
    </Carousel>
    </div>
    );
  }
}