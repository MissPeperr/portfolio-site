import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';
  

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
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
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Madison Peper</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#about-me">About Me</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#project-div">My Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/technologies/">What I Use</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}
