import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Choose from './Container/About/Choose/Choose';
import Profile from './Container/About/Profile/Profile';
import About from './Container/About/Aboutus/About';
import './App.css';
import {Collapse,Navbar, NavbarToggler,NavbarBrand,Nav,NavItem, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Home from './Container/Home/home';

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
    {link:'Free appraisal',linkedto:'about'},
    {link:'Services',linkedto:'about'},
    {link:'Study',linkedto:'about'},
    {link:'Work',linkedto:'about'},
    {link:'Visit',linkedto:'about'},
    {link:'Immigration',linkedto:'about'},
    {link:'News',linkedto:'about'},
    {link:'Weather',linkedto:'about'},
    {link:'Contact',linkedto:'about'},
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
        <NavItem>
                <NavLink to={linked.linkedto} key={id}><span className='links'>{linked.link}</span><span className='distinct'>|</span></NavLink>
        </NavItem>);
    })
    return (
      <div className="App">
      <Navbar color="light" light expand="md" sticky="top">
          <NavbarBrand href="/">CanVisaGuide</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navlinks}    
            </Nav>
          </Collapse>
        </Navbar>
      
      <Route path="/about" component={About}/>
      <Route path="/choose" exact component={Choose}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/" exact component={Home}/>
      </div>
    );
  }
}
export default App;
