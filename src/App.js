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
import Layout from './Components/Layout/Layout';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fixed: true,
      nav:[
    {link:'Home',linkedto:'/'},
    {link:'About',linkedto:'about'},
    {link:'Services',linkedto:'services'},
    {link:'Study',linkedto:'study'},
    {link:'USA Visa',linkedto:'usa'},
    {link:'Visit',linkedto:'visit'},
    {link:'Immigration',linkedto:'immigration'},
    ]
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let navlinks=this.state.nav.map((linked,id)=>{
      return(
        <NavItem key={id}>
                <NavLink to={linked.linkedto} ><span className='links'><strong>{linked.link}</strong></span><span className='distinct'>|</span></NavLink>
        </NavItem>);
    })
    return (
      <div >

 {/* <Navbar className=" bg-danger" dark expand="md" sticky="top">
     <NavbarBrand href="/"><strong>CanVisaGuide</strong></NavbarBrand>
        
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navlinks}    
              <UncontrolledDropdown >
                <DropdownToggle nav caret>
                 <span className='linkNews'><strong>News</strong></span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a target="_blank" href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html">IRCC</a>
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
              <NavItem >
              <span className='distinct'>|</span>
                <NavLink to="weather" ><span className='links'><strong>Weather</strong></span><span className='distinct'>|</span></NavLink>
        </NavItem>
        <NavItem >
                <NavLink to="contact" ><span className='links'><strong> Contact</strong></span><span className='distinct'>|</span></NavLink>
        </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        */
      }
      {/* All routes used to navigate to diferent pages in the website */}
 <Layout>
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
</Layout>
<br/>
     

     
      <FooterPage/>
      
      </div>
    );
  }
}
export default App;
