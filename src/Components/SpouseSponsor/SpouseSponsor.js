
//Everything written in the family and spouse sponsorship page.

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import spousePage from '../../Assets/spousePage.jpg';
import Fade from  'react-reveal/Fade';
const SpouseSponsor = () => {
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
                        src={spousePage}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className=" w-responsive text-center mx-auto p-1 mt-1 best ">
                      “Spouse Sponsorship”

                      </h2>
                      
                     
                      
                      
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                  <p className="mx-auto p-1 mt-1 text-justify para" md="auto">Companion and Common-law Sponsorship program Immigration Canada is the place Canadian natives and lasting occupants can support their qualified mate, spouse or wife, or customary law accomplice to move and live in Canada as a perpetual inhabitant.</p>
                  <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                  In order for the person sponsored to receive a visa and Canadian permanent resident PR from IRCC through Spouse and Common-law Sponsorship family class immigration program, the sponsor and sponsored person must prove that their relationship falls under one of three categories:
                  </p>

                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item para"> • Spouse (wife or husband)
</li></Fade>
                  <Fade left appear><li className="list-group-item para">•  Common-law Partner

</li></Fade>
 <Fade left appear><li className="list-group-item para">• Conjugal Partner
</li></Fade>
                </ul>
                </ul>
                </div><br/>
           
            
            </MDBContainer>
            <br/>
       
      
                </MDBCol>
              </MDBRow>
             
            </MDBCardBody>
          </MDBCard>
  );
}

export default SpouseSponsor;