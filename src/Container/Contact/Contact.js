import React , { Component }  from 'react';
import './Contact.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import ContactUs from '../../Components/Contact/Contact';

class Contact extends Component {
    render(){
        return(
           <div>
           <br/>
           <MDBContainer>
            <MDBRow>
            <MDBCol md="6">
		<div className="mapouter">
		<div className="gmap_canvas map">
		
		<iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=Canada%20Visa%20Application%20Centre%2CMahavir%20Marg%2C%20Nakodar%20Chowk%2Cjalandhar%2CPunjab&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		</div>
		</div>
		</MDBCol>
     
        <MDBCol md="4">
        
          <ContactUs/>
           
        </MDBCol>
      </MDBRow>
    </MDBContainer>
	

	</div>

        );
    }
}
export default Contact;