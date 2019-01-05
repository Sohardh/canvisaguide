
//Everything written in the parents and grandparents sponsorship page.

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import NomineePage from '../../Assets/NomineePage.jpg';
import Fade from  'react-reveal/Fade';

const NomineeSponsor = () => {
  if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
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
                        src={NomineePage}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                    
                      
                     
                      
                      
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                 
                  <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                  The Provincial Nomination Program (PNP) enables territories to assign people who wish to move to Canada and who are keen on settling in a specific region. Common Nomination is a vital quick track choice for Canadian Permanent Residency. Every Canadian area and one region have their very own special Provincial Nomination Programs (aside from Quebec, which has an alternate choice framework). Common and regional governments have been utilizing these projects to all the more successfully and effectively welcome newcomers to their locale. Each PNP is custom fitted to the province's/domain's particular needs to choose chosen people will's identity ready to sink into life and work in the area and to viably add to the network.
<br/>We can assess yours eligibility through various PNP program under

                  </p>

                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item para"> Alberta
</li></Fade>
                  <Fade left appear><li className="list-group-item para"> British Columbia

</li></Fade>
 <Fade left appear><li className="list-group-item para"> Manitoba
</li></Fade>
<Fade left appear><li className="list-group-item para"> New Brunswick
</li></Fade>
<Fade left appear><li className="list-group-item para"> Newfoundland and Labrador
</li></Fade>
<Fade left appear><li className="list-group-item para"> Northwest Territories
</li></Fade>
<Fade left appear><li className="list-group-item para"> Nova Scotia
</li></Fade>
<Fade left appear><li className="list-group-item para"> Ontario

</li></Fade>
<Fade left appear><li className="list-group-item para"> Prince Edward Island
</li></Fade>
<Fade left appear><li className="list-group-item para"> Saskatchewan
</li></Fade>
<Fade left appear><li className="list-group-item para"> Yukon
</li></Fade>
                </ul>
                </ul>
                </div><br/>
           
            
            </MDBContainer>
            <br/>
            <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                  Each province has its own “streams” (immigration programs that target certain groups) and requirements in a program stream, provinces and territories may target:
                  </p>
       
                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item para">•  students
</li></Fade>            
                  <Fade left appear><li className="list-group-item para">•  business people

</li></Fade>
<Fade left appear><li className="list-group-item para">•  skilled Workers

</li></Fade>
<Fade left appear><li className="list-group-item para">•  semi-skilled workers

</li></Fade>

                </ul>
                </ul>
                </div><br/>
           
            
            </MDBContainer>
   <p className="mx-auto p-1 mt-1 text-justify para" md="auto">
                  <strong>*For eligibility assessment contact CVG</strong>
                  </p>
      
                </MDBCol>
              </MDBRow>
             
            </MDBCardBody>
          </MDBCard>
  );
}

export default NomineeSponsor;