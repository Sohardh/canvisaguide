import React  from 'react';
import {   MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './contact.css'

const contactUs = () => {
        return(

<form id="gform" action="https://script.google.com/macros/s/AKfycbwWdTD2p8Ln_XjP9MEr0d7XNMfA1IZlihwt01dljD0bObgnXNkZ/exec" method="POST" target="_blank" encType="multipart/form-data"> 
          <div className="form">
     
            <h3 className=" text-center write">Write to us</h3>
            <div className="grey-text">
            

          
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name = "Name"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="subject"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil"
                name="message"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary" type="submit" >
                Send <MDBIcon icon="paper-plane-o" className="ml-1" />
              </MDBBtn>
           
            </div>
            </div>
          </form>)
    }
    export default contactUs;