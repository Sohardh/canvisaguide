import React , { Component }  from 'react';
import { MDBMask, MDBView, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Fade from 'react-reveal/Fade';
import bridge from '../../Assets/city.jpg';
import './visit.css';
import nigara from '../../Assets/nigara.jpg';


class Visit extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
    
        return(
            <MDBCard className="my-1 px-1 pb-1">
            <br/>
            <p className="head"><strong>Visit</strong></p>
            <MDBCardBody>
              <MDBRow>
              
                <MDBCol >
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className=" text-center mx-auto p-3 mt-2">
                    <img
                        src={bridge}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className=" w-responsive text-center mx-auto p-1 mt-1 best quote">
                      “Canada is first choice to visit for every person.  Every year, Canada welcomes more than 35 million people”
                      </h2>
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                 
                   <Fade bottom appear><p className=" text-center one">Most people who wish to enter Canada for a vacation, studying or for a business trip must apply for and be granted a Temporary Resident Visa (TRV). 
</p></Fade><br/>
                   <MDBRow className="mt-4">
            <MDBCol md="6" >
            <div className="service">
                <ul className="responsive  mx-auto p-1 mt-1 text-justify" >
                <Fade left appear><p className="para"> The TRV is issued by a Canadian Immigration Visa Office outside Canada, showing  that the holder has met all requirements for entry into Canada as a guest. TRVs might be good for only 1 entry or for multiple entries. Most visitors allowed entry for 6 months. Temporary workers and students are allowed entry for various time periods and a decision is made on a case-by-case basis. Extensions can be requested for from inside Canada. 
            <br/> <br/>
           <strong>NOTE: </strong> A TRV does not guarantee that the Officer at the Canadian Port of Entry will entry into Canada. At the Port of Entry, all guests must show that the reason for their visit to Canada is temporary. Officers at the Port of Entry will deny admission to all people who they believe do not plan to leave Canada at the expiry of their authorized stay in Canada.

                         </p></Fade>
               
                </ul>
                </div>
                </MDBCol>
                <MDBCol md="6" >
                <Fade right appear><img className="serviceimage" src={nigara} alt="services"/></Fade>
                </MDBCol>
                </MDBRow>

                <br/><br/>


           
                </MDBCol>
              </MDBRow>
             
            </MDBCardBody>
          </MDBCard>

        );
    }
}
export default Visit;