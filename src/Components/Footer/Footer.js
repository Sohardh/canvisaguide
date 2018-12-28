//Footer of the website, visible at the bottom of every page.

import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.css";
import {Modal } from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import Form from '../Form/Form.js';

class FooterPage extends React.Component {
 constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }
  

  handleShow=()=> {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

render() {
return (
  <div className="foot">
<Footer className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="4">
      <h4 className="title">Can Visa Guide</h4>
      <p className="address">
      Find us here:<br/>
Canada Visa Application Centre<br/>
Aman Plaza, 3rd Floor, 310 Lajpat Nagar,<br/>
Mahavir Marg, Nakodar Chowk<br/>
Opposite to Lovely Autos, Jalandhar-144001<br/><br/>
*Application Submission Timing: 09:00 to 17:00<br/>
*Passport Collection Timing: 09:00 to 17:00<br/>
e-mail:<br/>
Call on: 8558076070<br/>


      </p>
      </Col>
      <Col md="4">
      <h5 className="title">Popular Pages</h5>
      <ul className="Footlinks">
        <li className="list-unstyled ">
          <a href="#!">Family Sponsership</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Spouse Sponsership</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Visit Visa</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Student Visa</a>
        </li>
      </ul>
      
      </Col>
      <Col md="4">
      <h5 className="title">Company Info</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">About Us</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Contact Us</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">FAQs</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">In the News</a>
        </li>
      </ul>
      <button onClick={this.handleShow} class="btn blue-gradient">Free Appraisal</button>
<button class="btn purple-gradient">contact Us</button>

      </Col>
      
    </Row>
    
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.canvisaguide.com"> canvisaguide.com</a>

    </Container>
  </div>
</Footer>
<Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
             <p className="heading text-center mb-10">Free Assessment for Education and Immigration Canada</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
             <Form/>
            </p>
          </Modal.Body>
         
        </Modal>
</div>
);
}
}

export default FooterPage;