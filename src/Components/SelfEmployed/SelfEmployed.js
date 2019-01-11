import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import resident from '../../Assets/resident.jpg';
import flags from '../../Assets/image21.jpeg';
import business from '../../Assets/business.jpg';
import caregivers from '../../Assets/caregivers2.jpg';
import employee from '../../Assets/employee.jpg';
import './self.css'
class SelfEmployed extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      return(
<MDBCard>
<p className="head heading">Self Employed</p>
  <MDBCardBody>
  <MDBRow>
    <MDBCol>
    <div className="w-responsive text-center mx-auto p-3 mt-2 ">
<Fade bottom appear>
            <MDBCard reverse>
            
              <MDBView hover cascade waves>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-history.html" target="_blank">
           <div className=" text-center mx-auto p-3 mt-2">
              <img
                  src={employee}
                  alt=""
                  className="img-fluid " 
                />
            </div>
              </a>
                
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              
              
            </MDBCard>
            </Fade>
             </div>
        
<MDBContainer>

 <Fade bottom appear><p className="responsive "> The person must intend and able to be self-employed in Canada. 
            <br/> <br/>
           We access you on selection criteria:
             </p></Fade>
             <Fade bottom appear> <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                <li className="list-group-item para">-experience
                </li>
                <li className="list-group-item  ">-education  </li>
                <li className="list-group-item  ">-age  </li>
                <li className="list-group-item  ">-language abilities  </li>
                 <li className="list-group-item  ">-adaptability </li>
                </ul>
                </ul>
                </div></Fade><br/>
                <Fade bottom appear><p className="responsive ">Based upon IRCC minimum passing marks required currently is 35 out of 100.
           <br/> <br/>

             </p></Fade>
              <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                <li className="list-group-item para">(new criteria takes effect August 2 2018)
                </li>
                <li className="list-group-item  "> August 15 2018 to March 31 2019 = 50 applications
                <br/>&nbsp;&nbsp; -Minimum net worth of $100,000 Cdn
                <br/>&nbsp;&nbsp; -If destined to Montreal start up deposit of $50,0000 or more at local financial institute
                <br/>&nbsp;&nbsp; -If destined outside of Montreal start up deposit of $25,000 at a local financial institute
             
                </li>
                </ul>
                </ul>
                </div>
                <br/>
                     <p className="responsive ">     <strong> Contact CVG for details or detailed assessment.</strong></p>
            </MDBContainer>
            </MDBCol>
            </MDBRow>
            </MDBCardBody>
            </MDBCard>
            );
  }
}
export default SelfEmployed;