import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import resident from '../../Assets/resident.jpg';
import flags from '../../Assets/image21.jpeg';
import business from '../../Assets/business.jpg';
import caregivers from '../../Assets/caregivers2.jpg'
import './caregivers.css';
class Caregivers extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      return(

            <MDBCard className="my-1 px-1 pb-1">
            <br/>
            <p className="head heading">Permanent residence for caregivers</p>
            <MDBCardBody>
           
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className=" text-center mx-auto p-3 mt-2">
                    <img
                        src={caregivers}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className=" head text-center mx-auto p-1 mt-1 best heading quote">
                      “Live-in caregivers”
                      </h2>
                    </MDBCardBody>
      
                  </MDBCard>
                   </Fade>
                   </div>
                   <br/>
                 <MDBContainer>
                   <Fade bottom appear><p className=" one text-justify">We are in a transitional time wherein we have an old program as well as new pathways which will be applicable to those caregivers who may be eligible to apply for permanent residence under the economic class.
Old criteria for ‘Live-in-caregivers’:
Must work for 24 months FT as a live in caregiver OR acquire 3900 hours of FT experience in a live in capacity. Hours may be acquired within a maximum of 4 years or a minimum of 22 months.
New pathways for Caregivers:
-Caring for children
-Caring for those with high medical needs
Under these streams they do not have to live in and must prove 24 months of FT employment in the specified occupations. Added language level and education requirements were also introduced under these two new streams.
Since there is a provision to allow those that have worked as Live-In Caregivers (under the older criteria) to apply for permanent residence in Canada once they have attained the pre-requisite amount of experience, there was still a need to address transitional policies to cover the processing of these types of cases under the Economic Class. 

</p></Fade><br/>
</MDBContainer>
          
              
        
             
            </MDBCardBody>
          </MDBCard>
            );
  }
}
export default Caregivers;