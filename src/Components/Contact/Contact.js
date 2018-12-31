import React , { Component }  from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const contactUs = () => {
        return(

<form>
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
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send <MDBIcon icon="paper-plane-o" className="ml-1" />
              </MDBBtn>
            </div>
            </div>
          </form>)
    }
    export default contactUs;