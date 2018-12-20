import React from 'react';
import {Carousel} from 'react-bootstrap';
import hs1o from '../../Assets/hs1o.png';
import hs2o from '../../Assets/hs2o.png';
import hs3o from '../../Assets/hs3o.png';
import sd from '../../Assets/1st.png';

export default class Corousel extends React.Component {

  render() {
    return (
      <div>
      <Carousel indicators={false} controls={false} interval={5000}>
      <Carousel.Item>
        <img
          width='100%'
          height='auto'
          src={sd}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Move to Canada</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hs1o}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hs2o}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hs3o}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
  }
}