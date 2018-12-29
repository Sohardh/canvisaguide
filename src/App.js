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
import Work from './Container/Work/Work';
import Visit from './Container/Visit/Visit';
import News from './Container/News/News';


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
    {link:'Work',linkedto:'work'},
    {link:'Visit',linkedto:'visit'},
    {link:'Immigration',linkedto:'immigration'},
    {link:'News',linkedto:'news'},
    {link:'Weather',linkedto:'weather'},
    {link:'Contact',linkedto:'contact'},
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
                <NavLink to={linked.linkedto} ><span className='links'>{linked.link}</span><span className='distinct'>|</span></NavLink>
        </NavItem>);
    })
    return (
      <div >
     
      <Navbar color="light" light expand="md" sticky="top">
          <NavbarBrand href="/">CanVisaGuide</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navlinks}    
            </Nav>
          </Collapse>
        </Navbar>
      {/* All routes used to navigate to diferent pages in the website */}
      
      <Route path="/spousesponsor" exact component={SpouseSponsor}/>
      <Route path="/about" component={About}/>
      <Route path="/free" component={free}/>
      <Route path="/services" component={Services}/>
      <Route path="/study" component={Study}/>
      <Route path="/work" component={Work}/>
      <Route path="/visit" component={Visit}/>
      <Route path="/immigration" component={Immigration}/>
      <Route path="/news" component={News}/>
      <Route path="/weather" component={Weather}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/" exact component={Home}/>
 
<br/>
     

     
      <FooterPage/>
      
      </div>
    );
  }
}
export default App;
