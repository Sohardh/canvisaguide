import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md" sticky="top">
          <NavbarBrand href="/">reactstrap</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About Us
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    About Us
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
      
      </div>
    );
  }
}