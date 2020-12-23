import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Navigation extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="" fixed="top" dark expand="md" scrolling transparent>
      <div id="page_spacing" className="container-fluid">
        <MDBNavbarBrand>
        <img src="images/whitelogologo.svg" alt="logo"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler style={{'color':'#fff', 'background':'#4F1699'}} onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                <button id="nav_btn">Early Access</button>
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </div>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navigation;