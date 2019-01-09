import React , { Component }  from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const contactUs = () => {
        return(

<form action="https://script.google.com/macros/s/AKfycbxNCI6TpF4bRz9_t--is3RzLXqUe4tWiUQTwucjXB30pe3HgG0/exec" method="POST" target="_blank" encType="multipart/form-data"> 
          <div className="form">
     
            <h3 className=" text-center">Write to us</h3>
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