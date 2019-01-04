import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import resident from '../../Assets/resident.jpg';
import flags from '../../Assets/image21.jpeg';
import business from '../../Assets/business.jpg';
import caregivers from '../../Assets/caregivers2.jpg'
class Entrepreneur extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      return(
        <div>

              </div>
            );
  }
}
export default Entrepreneur;