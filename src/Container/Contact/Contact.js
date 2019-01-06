import React , { Component }  from 'react';
import './Contact.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import ContactUs from '../../Components/Contact/Contact';

class Contact extends Component {
    componentWillMount = function() {
        if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
    }
    
 

    render(){
        return(
           <div>
           <MDBContainer>
            <MDBRow>
            <MDBCol md="2">
		
		</MDBCol>
     
        <MDBCol md="8">
        
          <ContactUs/>
          <a href="tel:+918054466090">  <button type="button" className="btn btn-outline-default waves-effect">Call Us</button></a> 
           
        </MDBCol>
      </MDBRow>
    </MDBContainer>
	

	</div>

        );
    }
}
export default Contact;


   //<div className="mapouter">
		//<div className="gmap_canvas map">
		
	//	<iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=Canada%20Visa%20Application%20Centre%2CMahavir%20Marg%2C%20Nakodar%20Chowk%2Cjalandhar%2CPunjab&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
	//	</div>
	//	</div>