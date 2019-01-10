import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Fade from 'react-reveal/Fade';
import classroom from '../../Assets/classroom.jpg';
import './coaching.css';
import chart1 from '../../Assets/chart1.jpeg';
import chart2 from '../../Assets/chart2.jpeg';
import { string } from 'prop-types';

class Coaching extends Component {
 
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}

	render() {
   
		return (
			 <MDBCard className="my-10 px-10 pb-10">
        <p className="head"><strong>Coaching Station</strong></p>
      <MDBCardBody>
        <MDBRow>
        
          <MDBCol >
          <div className="w-responsive text-center mx-auto p-3 mt-2">
<Fade bottom appear>
            <MDBCard reverse>
            
              <MDBView hover cascade waves>
              
           <div className=" text-center mx-auto p-3 mt-2">
              <img
                  src={classroom}
                  alt=""
                  className="img-fluid" 
                />
            </div>
              
                
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              
              <MDBCardBody cascade className="text-center">
                <h2 className=" w-responsive text-center mx-auto p-1 mt-1 quote">
                "We ready the students for their bright future"
                </h2>
               
                
                
                
              </MDBCardBody>

                
            </MDBCard>
            </Fade>
            
             </div>
            
                <MDBContainer>
                <div className="service">
                    <ul className="list-group list-group-flush">
                    <p className="   text-justify" md="auto">We will help you prepare for the various language equivalency tests.  We offer the following:</p>
                    <ul className="list-group">
                    <MDBRow>
                    <MDBCol md="8">
                    <Fade bottom appear><li className="list-group-item para"> • Training for both <strong>Academic & General Modules </strong>
 </li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• <strong> Experienced and Dedicated Faculty </strong> </li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• <strong>Comprehensive course material</strong></li></Fade>

                    <Fade bottom appear><li className="list-group-item para">• <strong>Flexible Class Scheduling</strong></li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• <strong>IELTS General & Academic practice tests</strong> </li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• <strong>Personalized Attention to Each Student in small groups</strong></li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• <strong>Basic Grammar Training for required candidates</strong></li></Fade>
                 </MDBCol>
                    
                 </MDBRow>
                 
                    </ul>
                    </ul> 
                    </div>         
               
                  
            
                 
               <MDBContainer className="text-center ">
               <MDBRow>
                 <MDBCol md="6">
                 <img
                      src={chart1}
                      alt=""
                      className="chart"
                    />

                 </MDBCol>
                 <MDBCol md="6">
                 <img
                      src={chart2}
                      alt=""
                      className="chart"
                    />

                 </MDBCol>
               </MDBRow>
                 
                </MDBContainer>
                 
                <div className="service">
                    <ul className="list-group list-group-flush">
                    <p className=" y para text-justify" md="auto"><strong>The four criteria on which the examiners award a band score in the Writing Section are:</strong></p>
                    <ul className="list-group">
                    <MDBRow>
                    <MDBCol md="6">
                    <Fade bottom appear><li className="list-group-item para"> • Task Achievement (for Task 1)</li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• Task Response (for Task 2) </li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• Coherence and Cohesion</li></Fade>

                    <Fade bottom appear><li className="list-group-item para">• Lexical Resource and Grammatical Range and Accuracy</li></Fade>
                   
                 </MDBCol>
                    
                 </MDBRow>
                 
                    </ul>
                    </ul> 
                    </div>         
               <br/>
               <br/>
                <div className="service">
                    <ul className="list-group list-group-flush">
                    <p className=" y para text-justify" md="auto"><strong>Similarly, the four criteria on which the examiners award a band score in the Speaking section are:</strong></p>
                    <ul className="list-group">
                    <MDBRow>
                    <MDBCol md="6">
                    <Fade bottom appear><li className="list-group-item para"> • Fluency and Coherence</li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• Lexical Resource </li></Fade>
                    <Fade bottom appear><li className="list-group-item para">• Grammatical Range and Accuracy</li></Fade>

                    <Fade bottom appear><li className="list-group-item para">• Pronunciation</li></Fade>
                   
                 </MDBCol>
                    
                 </MDBRow>
                 
                    </ul>
                    </ul> 
                    </div>   
                    <p className=" visit text-justify " md="auto"><strong>Visit our office for more details and for enrollment in next batch.</strong></p>
                    <p className=" celpip text-justify " md="auto"><strong>CELPIP preparation also will start shortly at our location</strong></p>
                    </MDBContainer>
         
          </MDBCol>
        </MDBRow>

      </MDBCardBody>
    </MDBCard>
  );
	}
}
export default Coaching;
//action="https://mailthis.to/sohardhchobera684@gmail.com" method="POST"