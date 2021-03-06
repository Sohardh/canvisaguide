import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Profile from './Container/About/Profile/Profile';
import About from './Container/About/Aboutus/About';
import './App.css';
import {Collapse,Navbar, NavbarToggler,NavbarBrand,Nav,NavItem, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Home from './Container/Home/home';
import free from './Container/FreeApprsl/FreeApprsl';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import FooterPage from './Components/Footer/Footer';
import SpouseSponsor from './Components/SpouseSponsor/SpouseSponsor';
import Services from './Container/Services/Services';
import Study from './Container/Study/Study';
import Immigration from './Container/Immigration/Immigration';
import Weather from './Container/Weather/Weather';
import Contact from './Container/Contact/Contact';
import USA from './Container/USA/USA';
import Visit from './Container/Visit/Visit';
import Coaching from './Container/Coaching/Coaching';
import NomineeSponsor from './Components/NomineeSponsor/NomineeSponser';
import ParentsSponsor from './Components/ParentsSponsor/ParentsSponsor';
import BusinessVisa from './Components/BusinessVisa/BusinessVisa';
import SelfEmployed from './Components/SelfEmployed/SelfEmployed';
import Caregivers from './Components/Caregivers/Caregivers';
import PR from './Components/PR/PR';
import {Modal } from 'react-bootstrap';
import Form from './Components/Form/Form'
import ContactUs from './Components/Contact/Contact';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      show:false,
      fixed: true,
      nav:[
    {link:'Home',linkedto:'/'},
    {link:'About Canada',linkedto:'about'},
    {link:'Services',linkedto:'services'},
    {link:'Study',linkedto:'study'},
    {link:'USA Visa',linkedto:'usa'},
    {link:'Visit',linkedto:'visit'},
    {link:'Coaching Station', linkedto:'coachingstation'}
    ]
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  closeNavbar = () => {
        this.setState({
            isOpen: false
        });
    }
      handleHide=() => {
    this.setState({ show: false });
  }
     handleShow=()=> {
    this.setState({ show: true });
  }
    handleShowContact =() => {
     this.setState({ showContact: true });
  }
handleHideContact =() => {
    this.setState({ showContact: false });
  }

  render() {
    let navlinks=this.state.nav.map((linked,id)=>{
      return(
        <NavItem key={id} onClick={this.closeNavbar} >
                <NavLink to={linked.linkedto}  ><span className='links '><strong>{linked.link}</strong></span><span className='distinct'>|</span></NavLink>
        </NavItem>);
    })
    return (
      <div >
     
      <Navbar light expand="md" sticky="top" className="nav">
          <NavbarBrand href="/" ><h3 className="brandname">CanVisaGuide</h3></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navlinks}    
               <UncontrolledDropdown >
                <DropdownToggle nav caret>
                 <span className='linkNews'><strong>Immigration</strong></span>

                </DropdownToggle>

                <DropdownMenu right>
                  <a href="immigration">
                  <DropdownItem>
                    <NavItem  onClick={this.closeNavbar}>
               Language Test Equivalency Charts
                   </NavItem>
                  </DropdownItem></a>

                  <a href="permanentResident">
                  <DropdownItem>
                   <NavItem  onClick={this.closeNavbar}>
               Pathway to Permanent Resident Canada
                   </NavItem>
                  </DropdownItem></a>
                  <a href="businessvisa">
                   <DropdownItem>
                   <NavItem  onClick={this.closeNavbar}>
             Business Visa
                   </NavItem>
                  </DropdownItem></a>
                <a href="selfemployed">
                  <DropdownItem>
                  <NavItem  onClick={this.closeNavbar}>
              Self Employed
                   </NavItem>
                  </DropdownItem></a>
                  
                  <a href="caregivers">
                  <DropdownItem>
                   <NavItem  onClick={this.closeNavbar}>
               Permanent residence for caregivers
                   
                   </NavItem>
                  </DropdownItem></a>
                
                     

                </DropdownMenu>


              </UncontrolledDropdown>
              <span className='distinctDrop'>|</span>
              <UncontrolledDropdown >
                <DropdownToggle nav caret>
                 <span className='linkNews'><strong>News</strong></span>
                </DropdownToggle>
                <DropdownMenu right>
                <a target="_blank" rel="noopener noreferrer" href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html">
                  <DropdownItem>
                IRCC
                  </DropdownItem> </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://irb-cisr.gc.ca/en/news/Pages/index.aspx">
                  <DropdownItem>
                 IRB
                  </DropdownItem></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.immigratemanitoba.com/news-and-notices/">
                   <DropdownItem>
                   Manitoba
                  </DropdownItem></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.welcomebc.ca/Immigrate-to-B-C/B-C-Provincial-Nominee-Program/News">
                   <DropdownItem>
                 British Columbia
                  </DropdownItem> </a>
                  <a target="_blank" rel="noopener noreferrer" href=" http://www.ontarioimmigration.ca/en/pnp/OI_PNPNEW.html">
                  <DropdownItem>
                 Ontario
                  </DropdownItem></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.alberta.ca/news.aspx">
                  <DropdownItem>
                Alberta
                  </DropdownItem></a>
                 
              

                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem  onClick={this.closeNavbar} >
              <span className='distinct'>|</span>
                <NavLink to="weather" ><span className='links'><strong>Weather</strong></span><span className='distinct'>|</span></NavLink>
        </NavItem>
        <NavItem  onClick={this.closeNavbar}>
                <NavLink to="contact" ><span className='links'><strong>Contact</strong></span><span className='distinct'>|</span></NavLink>
        </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      {/*Button For free Appraisal form*/}
        <div className="hp-ctn-howItWorks">
    <span onClick={this.handleShow}>Free Assessment</span>
      </div>
      <div className="btnContact">
    <span onClick={this.handleShowContact}>Contact Us</span>
      </div>

      
    

      {/* All routes used to navigate to diferent pages in the website */}
      <Route path="/permanentResident" component={PR}/>
      <Route path="/caregivers" component={Caregivers}/>
      <Route path="/selfemployed" component={SelfEmployed}/>
      <Route path="/businessvisa" component={BusinessVisa}/>
      <Route path="/nomineesponsor" exact component={NomineeSponsor}/>
      <Route path="/spousesponsor" exact component={SpouseSponsor}/>
      <Route path="/parentssponsor" exact component={ParentsSponsor}/>
      <Route path="/about" component={About}/>
      <Route path="/free" component={free}/>
      <Route path="/services" component={Services}/>
      <Route path="/study" component={Study}/>
      <Route path="/usa" component={USA}/>
      <Route path="/visit" component={Visit}/>
      <Route path="/immigration" component={Immigration}/>
      <Route path="/coachingstation" component={Coaching}/>
   
      <Route path="/weather" component={Weather}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/" exact component={Home}/>

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
              <Modal
          {...this.props}
          show={this.state.showContact}
          onHide={this.handleHideContact}
          dialogClassName="custom-modal"
        >
       
          <Modal.Body>
            <p>
             <ContactUs/>
            </p>
          </Modal.Body>
         
        </Modal>

              <Modal
          {...this.props}
          show={this.state.showContact}
          onHide={this.handleHideContact}
          dialogClassName="custom-modal"
        >
       
          <Modal.Body>
            <p>
             <ContactUs/>
            </p>
          </Modal.Body>
         
        </Modal>

 
<br/>

     
      <FooterPage />
      
      </div>
    );
  }
}
export default App;
