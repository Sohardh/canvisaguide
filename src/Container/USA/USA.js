import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import hs1 from '../../Assets/statue.JPG';
import canada2 from '../../Assets/studyusa.jpg';
import Fade from 'react-reveal/Fade';

class USA extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


	render() {
  
		return (
            
			 <MDBCard className="my-10 px-10 pb-10">
             <p className="head"><strong>USA Visa</strong></p>
            
      <MDBCardBody>
        <MDBRow>
        
          <MDBCol >
          <div className="w-responsive text-center mx-auto p-3 mt-2">
<Fade bottom appear>
            <MDBCard reverse>
            
              <MDBView hover cascade waves>
             
           <div className=" text-center mx-auto p-3 mt-2">
              <img
                  src={hs1}
                  alt=""
                  className="img-fluid" 
                />
            </div>

                
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold best">
                 Visit USA
                </h2>
               
                
                
              </MDBCardBody>

            </MDBCard>
            </Fade>
             </div>
         
            <MDBContainer className="text-justify">
               <Fade right appear><p>
               USA Visitor Visa is a tourist visa to the United States of America. It is also known as B2 Visa. It is a non-immigrant visa issued to people entering the US temporarily for pleasure, tourism, or medical treatment. Any foreign citizen who wants to visit USA for tourism, visiting with family and friends, attending special events like family functions and ceremonies, or for medical treatment may qualify for and can apply for the Visitor Visa.
              </p></Fade>
              
            </MDBContainer>

          </MDBCol>
        </MDBRow>
        <hr className="mb-5 mt-4" />
        <br/>
        <br/>
        <MDBRow>
          <MDBCol>
          <div className="w-responsive text-center mx-auto p-3 mt-2">
           <Fade bottom appear>
            <MDBCard reverse>
              <MDBView hover cascade waves>
           <div className="=text-center mx-auto p-3 mt-2">
                <img
                  src={canada2}
                  alt=""
                  className="img-fluid"
                />
                </div>
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold best">
                Study in USA
                </h2>
             
              </MDBCardBody>
            </MDBCard>
            </Fade>
            </div>
            <MDBContainer className="mt-5 text-justify">
               <Fade bottom appear><p>
               The USA continues to be the top choice for students planning to study abroad. If you are among the few who aspire and have gotten the admission into your aspired university, applying for Student Visa is the next important step to realizing your Study in USA dream.
              </p></Fade>
             
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
	}
}
export default USA;
//action="https://mailthis.to/sohardhchobera684@gmail.com" method="POST"