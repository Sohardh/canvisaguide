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
import News from './Container/News/News';
import NomineeSponsor from './Components/NomineeSponsor/NomineeSponser';
import ParentsSponsor from './Components/ParentsSponsor/ParentsSponsor';
import BusinessVisa from './Components/BusinessVisa/BusinessVisa';
import SelfEmployed from './Components/SelfEmployed/SelfEmployed';
import Caregivers from './Components/Caregivers/Caregivers';
import PR from './Components/PR/PR';
import Entrepreneur from './Components/Entrepreneur/Entrepreneur';
import {Modal } from 'react-bootstrap';
import Form from './Components/Form/Form'

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

                  <DropdownItem>
                    <NavItem  onClick={this.closeNavbar}>
                <NavLink to="immigration" >Language Test Equivalency Charts</NavLink>
                   </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                   <NavItem  onClick={this.closeNavbar}>
                <NavLink to="permanentResident" >Pathway to Permanent Resident Canada</NavLink>
                   </NavItem>
                  </DropdownItem>
                   <DropdownItem>
                   <NavItem  onClick={this.closeNavbar}>
                <NavLink to="businessvisa" >Business Visa</NavLink>
                   </NavItem>
                  </DropdownItem>
                
                  <DropdownItem>
                  <NavItem  onClick={this.closeNavbar}>
                <NavLink to="selfemployed" >Self Employed</NavLink>
                   </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                   <NavItem  onClick={this.closeNavbar}>
                <NavLink to="caregivers" >Permanent residence for caregivers
                    </NavLink>
                   </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                     

                </DropdownMenu>


              </UncontrolledDropdown>
              <span className='distinctDrop'>|</span>
              <UncontrolledDropdown >
                <DropdownToggle nav caret>
                 <span className='linkNews'><strong>News</strong></span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a target="_blank" href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html">IRCC </a>
                  </DropdownItem>
                  <DropdownItem>
                   <a target="_blank" href="https://irb-cisr.gc.ca/en/news/Pages/index.aspx">IRB</a>
                  </DropdownItem>
                   <DropdownItem>
                   <a target="_blank" href="https://www.immigratemanitoba.com/news-and-notices/">Manitoba</a>
                  </DropdownItem>
                   <DropdownItem>
                   <a target="_blank" href="https://www.welcomebc.ca/Immigrate-to-B-C/B-C-Provincial-Nominee-Program/News">British Columbia </a>
                  </DropdownItem>
                  <DropdownItem>
                   <a target="_blank" href=" http://www.ontarioimmigration.ca/en/pnp/OI_PNPNEW.html">Ontario</a>
                  </DropdownItem>
                  <DropdownItem>
                   <a target="_blank" href="https://www.alberta.ca/news.aspx">Alberta</a>
                  </DropdownItem>
                  <DropdownItem divider />
              

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
    <p onClick={this.handleShow}>Free Appraisal</p>
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
      <Route path="/news" component={News}/>
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

 
<br/>

     
      <FooterPage />
      
      </div>
    );
  }
}
export default App;
