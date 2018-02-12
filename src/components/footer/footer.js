import React, { Component } from 'react';
import {Row, Col, Nav, NavItem, NavDropdown, MenuItem, Navbar  } from 'react-bootstrap';
import LinkeIn from '../../static/images/in.png';
import Facebook from '../../static/images/facebook.png';
import Google from '../../static/images/googleplus.png';
import Youtube from '../../static/images/youtube.png';
import Twitter from '../../static/images/twitter.png';
import './dist/style.css';

class AppFooter extends Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="container">
          <div className="footer-one-outer">
           <Row className="show-grid">
               <Col xs={12} md={4}>
                  <div className="footers-links company-info">
                    <h3 className="title">Tricky Solution</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni
                     si ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat .
                      </p>
                  </div>
               </Col>
               <Col xs={12} md={8}>
                  <Row>
                  <Col xs={12} md={3}>
                    <div className="footers-links">
                      <h3 className="title">Company</h3>
                      <Nav className="links-list">
                        <NavItem href="/">About Us</NavItem>
                        <NavItem href="/">Contact Us</NavItem>
                        <NavItem href="/" >Blog</NavItem>
                        <NavItem href="/" >Our Partner</NavItem>
                        <NavItem href="/" >Tenstimonial</NavItem>
                        <NavItem href="/" >Tutorial</NavItem>
                        <NavItem href="/" >Projects/Training</NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col xs={12} md={3}>
                  <div className="footers-links">
                    <h3 className="title">Our Products</h3>
                    <Nav className="links-list">
                      <NavItem href="/">About Us</NavItem>
                      <NavItem href="/">Contact Us</NavItem>
                      <NavItem href="/" >Blog</NavItem>
                      <NavItem href="/" >Our Partner</NavItem>
                      <NavItem href="/" >Tenstimonial</NavItem>
                      <NavItem href="/" >Tutorial</NavItem>
                      <NavItem href="/" >Projects/Training</NavItem>
                    </Nav>
                  </div>
                  </Col>
                  <Col xs={12} md={3}>
                  <div className="footers-links">
                    <h3 className="title">Technologies/Categories</h3>
                    <Nav className="links-list">
                      <NavItem href="/">About Us</NavItem>
                      <NavItem href="/">Contact Us</NavItem>
                      <NavItem href="/" >Blog</NavItem>
                      <NavItem href="/" >Our Partner</NavItem>
                      <NavItem href="/" >Tenstimonial</NavItem>
                      <NavItem href="/" >Tutorial</NavItem>
                      <NavItem href="/" >Projects/Training</NavItem>
                    </Nav>
                  </div>
                  </Col>
                  <Col xs={12} md={3}>
                  <div className="footers-links">
                    <h3 className="title"></h3>
                    <Nav className="links-list">
                      <NavItem href="/">About Us</NavItem>
                      <NavItem href="/">Contact Us</NavItem>
                      <NavItem href="/" >Blog</NavItem>
                      <NavItem href="/" >Our Partner</NavItem>
                      <NavItem href="/" >Tenstimonial</NavItem>
                      <NavItem href="/" >Tutorial</NavItem>
                      <NavItem href="/" >Projects/Training</NavItem>
                    </Nav>
                  </div>
                  </Col>
                  </Row>
               </Col>
             </Row>
          </div>
          <div className="footer-two-outer">
           <Row className="show-grid">
               <Col xs={12} md={7}>
                <div className="copy-rights">
                <Nav className="links-list">
                  <NavItem href="/">Privacy Policy</NavItem>
                  <NavItem href="/">Terms of service</NavItem>
                  <p >Copyright © 2018 The Tricky Solution. All rights reserved.</p>
                </Nav>
                </div>
               </Col>
               <Col xs={12} md={5}>
               <div className="footer-socials-links">
                 <Nav className="links-list">
                   <NavItem href="/"><img src={Facebook} alt="Facebook" /></NavItem>
                   <NavItem href="/"><img src={Twitter} alt="Twitter" /></NavItem>
                   <NavItem href="/"><img src={LinkeIn} alt="LinkeIn" /></NavItem>
                   <NavItem href="/"><img src={Google} alt="Google" /></NavItem>
                   <NavItem href="/"><img src={Youtube} alt="Youtube" /></NavItem>
                 </Nav>
               </div>
               </Col>
          </Row>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
