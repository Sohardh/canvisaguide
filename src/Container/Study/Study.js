import React , { Component }  from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Fade from 'react-reveal/Fade';
import study from '../../Assets/study2.jpg';
import flags from '../../Assets/image21.jpeg'
import './study.css';

class Study extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
     
        return(
            <MDBCard className="my-1 px-1 pb-1">
            <br/>
            <p className="head"><strong>Study</strong></p>
            <MDBCardBody>
              <MDBRow>
              
                <MDBCol >
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className="text-center mx-auto p-3 mt-2">
                    <img
                        src={study}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className=" w-responsive text-center mx-auto p-1 mt-1 best quote">
                      “Canada is home to the absolute best schools on the planet”

                      </h2>
                      
                     
                      
                      
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                   <Fade bottom appear><h2 className="font-weight-bold text-center">Do you want to continue your studies in Canada?</h2></Fade>
                   <h3 className="w-responsive text-center mx-auto p-3 mt-2 ">
                  
                      </h3>

                      <MDBContainer className="mt-10 ">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <Fade bottom appear><h3>  There are a few options: </h3></Fade>
                <ul className="list-group">
                  <Fade bottom appear><li className="list-group-item para"> <strong>Canada Study Permit:</strong> This is the normal way to study in Canada.
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para"><strong>Study without a study permit:</strong>  There are scenarios where a study permit is not needed.
</li></Fade>
                </ul>
                </ul>
                </div>
           <p className="mx-auto p-1 mt-1 para text-justify cont" md="auto"><Fade bottom appear>Contact us to provide an initial assessment for those who wish to pursue studies in Canada.  We offer services from admission to visa application.<br/>
                Studying in Canada may provide you with the opportunity to continue to work in Canada after graduation and become a permanent resident.  
                For those that need additional monies while studying in Canada, it is possible to work at the same time.<br/>
                </Fade><Fade bottom appear>
                “CVG helps you to get ADMISSIONS in one of the best colleges and universities in Canada according to your eligibility “
            </Fade></p>
            
            </MDBContainer>
            <br/>
            <Fade bottom appear><img className="image" src={flags} alt="services"/></Fade>
      
                </MDBCol>
              </MDBRow>
             
            </MDBCardBody>
          </MDBCard>

        );
    }
}
export default Study;