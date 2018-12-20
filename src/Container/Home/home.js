import React, { Component } from 'react';
import Corousel from '../../Components/Corousel/Corousel';
import PicCards from '../../Components/PicCards/PicCards';
import {Image} from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
      <div >     
        <Corousel/>
        <br/>
        <PicCards/>

      

      </div>
    );
  }
}

export default Home;
