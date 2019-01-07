import React , { Component }  from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Services.css";
import Fade from 'react-reveal/Fade';
import service from '../../Assets/service.jpg';
import services from '../../Assets/services.jpg';
import services1 from '../../Assets/services1.jpg';
import denied from '../../Assets/denied.jpg';

class Services extends Component {
    componentWillMount = function() {
        if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
    }
    
    
    render(){
       
        return(
            <div className="font">
            
      <MDBContainer className="mt-5"> 
            <p className="head"><strong>Our Services</strong></p>
            <br/>
            <MDBRow className="mt-4">
            <MDBCol md="6" >
            <div className="service">
                <ul className="list-group list-group-flush">
                <Fade left appear><h3> Assess your eligibility at no cost </h3></Fade>
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item"> Personal assessment of qualification</li></Fade>
                  <Fade left appear><li className="list-group-item"> Email responses to your inquiries</li></Fade>
                  <Fade left appear><li className="list-group-item"> Telephone or chat inquiries</li>  </Fade>
                </ul>
                </ul>
                </div>
                </MDBCol>
                <MDBCol md="6" >
                <Fade right appear><img className="serviceimage" src={service} alt="services"/></Fade>
                </MDBCol>
                </MDBRow>

                <br/><br/>

                <MDBRow className="mt-4">
                <MDBCol md="6" >
                <Fade left appear><img className="serviceimage1" src={services} alt="services"/></Fade>
                <Fade left appear><img className="serviceimage1" src={denied} alt="services"/></Fade>
                </MDBCol>
                <MDBCol md="6" >
                <div className="service1">
                <ul className=" list-group list-group-flush">
                <Fade right appear><h3>  Area of Practices and Expertise </h3></Fade>
                <ul className="list-group">
                   <Fade right appear><li className="list-group-item "> Manitoba Provincial Nominee Program </li></Fade>
                   <Fade right appear><li className="list-group-item "> Saskatchewan Provincial Nominee Program </li></Fade>
                   <Fade right appear><li className="list-group-item"> Prince Edward Island Provincial Nominee Program  </li></Fade>
                   <Fade right appear><li className="list-group-item"> British Columbia Provincial Nominee Program  </li></Fade>
                  <Fade right appear><li className="list-group-item"> Alberta Immigrant Nominee Program  </li></Fade>
                  <Fade right appear><li className="list-group-item"> Ontario Provincial Nominee Program    </li></Fade>
                  <Fade right appear><li className="list-group-item"> Student visa   </li></Fade>
                  <Fade right appear><li className="list-group-item"> Refusal Cases Expertise   </li></Fade>
                  <Fade right appear><li className="list-group-item">Investor programs    </li>  </Fade>
                  <Fade right appear><li className="list-group-item"> Business programs   </li></Fade>  
                  <Fade right appear><li className="list-group-item"> Entrepreneur  programs   </li></Fade>  
                  <Fade right appear><li className="list-group-item"> Family Sponsorship  </li></Fade>  
                  <Fade right appear><li className="list-group-item"> Spousal and Dependent Sponsorship    </li></Fade>  
                  <Fade right appear><li className="list-group-item"> Family Sponsorships     </li></Fade>
                  <Fade right appear><li className="list-group-item"> Post graduate work permit      </li></Fade> 
                  <Fade right appear><li className="list-group-item"> Work Permits      </li></Fade> 
                  <Fade right appear><li className="list-group-item"> Canada Federal Skilled Workers      </li></Fade>  
                  <Fade right appear><li className="list-group-item"> Canada Federal Trades Workers      </li> </Fade>
                  <Fade right appear><li className="list-group-item"> Visitor visa       </li> </Fade>
                  <Fade right appear><li className="list-group-item"> Temporary Resident visa (TRV)      </li></Fade> 
                  <Fade right appear><li className="list-group-item"> Parents and Grandparents Super Visa      </li> </Fade>   
                </ul>
                </ul>
                </div>
                </MDBCol>
                </MDBRow>
                
                <br/><br/>

                <MDBRow className="mt-4">
            <MDBCol md="6" >
            <div className="service">
                <ul className="list-group list-group-flush">
                <Fade left appear><h3> Address your Concerns with desired solutions </h3></Fade>
                <ul className="list-group">
                  <Fade left appear><li className="list-group-item">  Preparation help for language test like IELTS,CELPIP </li></Fade>
                  <Fade left appear><li className="list-group-item">  Canadian personal interview preparation </li></Fade>
                  <Fade left appear><li className="list-group-item">  Canadian Immigration Application Processing Times</li>  </Fade>
                  <Fade left appear><li className="list-group-item">  Canadian Immigration Process</li>  </Fade>
                  <Fade left appear><li className="list-group-item">  Proving Work Experience</li>  </Fade>
                  <Fade left appear><li className="list-group-item">  Proving English Language Ability</li>  </Fade>
                  <Fade left appear><li className="list-group-item">  Special Services offering for International students</li>  </Fade>
                </ul>
                </ul>
                </div>
                </MDBCol>
                <MDBCol md="6" >
                <Fade right appear><img className="serviceimage" src={services1} alt="services"/></Fade>
                </MDBCol>
                </MDBRow>


                   </MDBContainer>
       
    
            </div>
        );
    }
}
export default Services;