import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import resident from '../../Assets/resident.jpg';
import flags from '../../Assets/image21.jpeg';
import business from '../../Assets/business.jpg';
import caregivers from '../../Assets/caregivers2.jpg'
class PR extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      return(
      <MDBCard className="my-1 px-1 pb-1">
            <br/>
            <p className="head"><strong> Pathway to Permanent Resident Canada</strong></p>
            <MDBCardBody>
              <MDBRow>
              
                <MDBCol >
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className="text-center mx-auto p-3 mt-2">
                    <img
                        src={resident}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className="head w-responsive text-center mx-auto p-1 mt-1 best ">
                      “You can easily be a permanent resident of Canada”

                      </h2>
                      
                     
                      
                      
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                  
                   <h3 className="w-responsive text-center mx-auto p-3 mt-2 ">
                  
                      </h3>

                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <Fade bottom appear><h3>  Under: </h3></Fade>
                <ul className="list-group">
                <MDBRow>
                <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para"> FSW
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">FTC
</li></Fade>
<Fade bottom appear><li className="list-group-item para">FSE
</li></Fade>
</MDBCol>
 <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para">Business
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">Investor 
</li></Fade>
<Fade bottom appear><li className="list-group-item para">Live-in caregiver
</li></Fade>
</MDBCol>
 <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para"> PNP 
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">Canadian experience class
</li></Fade>
<Fade bottom appear><li className="list-group-item para">International graduate students 
</li></Fade>
</MDBCol>
</MDBRow>
                </ul>
                </ul>
                </div><br/>
           <Fade bottom appear><p className="mx-auto p-1 mt-1 text-justify para" md="auto">Every category consists of various requirements. We will help you to provide a solution to your needs:</p>
            <br/>
         <div className="service">
                <ul className="list-group list-group-flush">
                <p className=" y para" md="auto">We would assess your application based on:</p>
                <ul className="list-group">
                <MDBRow>
                <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para"> • Age
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">•  Education
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">• Work experience
</li></Fade>

                  <Fade bottom appear><li className="list-group-item para">• Whether you have a valid job offer
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">• English and/or French language skills
</li></Fade>
<Fade bottom appear><li className="list-group-item para">• Adaptability (how well you’re likely to settle here)
</li></Fade>
</MDBCol>

</MDBRow>
                </ul>
                </ul> 
                </div>         
              </Fade>
           
            </MDBContainer>
            <br/>
            <Fade bottom appear><p className="mx-auto p-1 mt-1 text-justify para" md="auto">These factors are part of a 100-point grid used to assess eligibility. For the Federal Skilled Worker Program. You earn points for how well you do in each of the 6 factors.<br/>
            The current pass mark is 67 points.<br/>
            For more details or for an assessment: contact our office or email us. </p>
            </Fade>
      
                </MDBCol>
              </MDBRow> 
            </MDBCardBody>
          </MDBCard>
            );
  }
}
export default PR;