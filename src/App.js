import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './Container/About/About';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';
import Home from './Container/Home/home'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fixed: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
      <Navbar color="light" light expand="md" sticky="top">
          <NavbarBrand href="/">reactstrap</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to='/'><span className='links'>Home</span></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>

                <DropdownToggle nav caret>
                    About Us   
                </DropdownToggle>
             
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to='about'><span className='linksDrop'>About Us</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    Why choose us?
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Why ICCRC Membership?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Why ICCRC?
                  </DropdownItem>
                  <DropdownItem>
                   What is ICCRC?
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      
      <Route path="/about" component={About}/>
      <Route path="/" exact component={Home}/>

      </div>
    );
  }
}

export default App;
