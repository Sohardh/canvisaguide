
//Everything written in the parents and grandparents sponsorship page.

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import ParentsPage from '../../Assets/ParentsPage.jpg';
import Fade from  'react-reveal/Fade';

const ParentsSponsor = () => {
  return (
   <MDBCard className="my-1 px-1 pb-1">
            <br/>
           
            <MDBCardBody>
              <MDBRow>
              
                <MDBCol >
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className="text-center mx-auto p-3 mt-2">
                    <img
                        src={ParentsPage}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className=" w-responsive text-center mx-auto p-1 mt-1 best ">
                      “Parents And Grandparents Sponsorship”

                      </h2>
                      
                     
                      
                      
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                 
                  <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                  When you sponsor your parents and grandparents to become permanent residents of Canada, you must:
                  </p>

                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item para"> • meet certain income requirements
</li></Fade>
                  <Fade left appear><li className="list-group-item para">•  support that person and their dependants financially

</li></Fade>
 <Fade left appear><li className="list-group-item para">• Conjugal Partner
</li></Fade>
                </ul>
                </ul>
                </div><br/>
           
            
            </MDBContainer>
            <br/>
            <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                  You and the sponsored relative must sign a sponsorship agreement that:
                  </p>
       
                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item para"> • commits you to provide financial support for your relative (and any other eligible relatives accompanying them):
                  <br/> &nbsp;&nbsp;- for a period of three to 20 years
                  <br/> &nbsp;&nbsp;- depending on their age and relationship to you
                  <br/> &nbsp;&nbsp;- beginning on the date they become a permanent resident
</li></Fade>
                  <Fade left appear><li className="list-group-item para">•  states that the persons becoming permanent residents will make every effort to support themselves

</li></Fade>

                </ul>
                </ul>
                </div><br/>
           
            
            </MDBContainer>
             <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                 Dependent children under age 19 do not have to sign the agreement.
Quebec residents must sign an “undertaking” with the province of Quebec. This is a contract that binds your sponsorship
<br/><br/>
<strong>* For More details for eligibility assessment contact CVG</strong>

                  </p>
      
                </MDBCol>
              </MDBRow>
             
            </MDBCardBody>
          </MDBCard>
  );
}

export default ParentsSponsor;