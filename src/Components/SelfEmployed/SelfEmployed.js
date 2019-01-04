import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import resident from '../../Assets/resident.jpg';
import flags from '../../Assets/image21.jpeg';
import business from '../../Assets/business.jpg';
import caregivers from '../../Assets/caregivers2.jpg'
class SelfEmployed extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      return(
<MDBContainer>
<p className="head">Self Employed</p>
              <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                <li className="list-group-item para">(new criteria takes effect August 2 2018)
                </li>
                <li className="list-group-item para"> August 15 2018 to March 31 2019 = 50 applications
                <br/>&nbsp;&nbsp; -Minimum net worth of $100,000 Cdn
                <br/>&nbsp;&nbsp; -If destined to Montreal start up deposit of $50,0000 or more at local financial institute
                <br/>&nbsp;&nbsp; -If destined outside of Montreal start up deposit of $25,000 at a local financial institute
             
                </li>
                </ul>
                </ul>
                </div>
            </MDBContainer>
            );
  }
}
export default SelfEmployed;